export async function getGitHubContributions(username: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const headers = {
    Authorization: `bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    // 1. Fetch years active
    const yearQuery = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionYears
          }
        }
      }
    `;
    const yearRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query: yearQuery }),
      next: { revalidate: 3600 }
    });
    
    if (!yearRes.ok) return null;
    const yearData = await yearRes.json();
    const years = yearData.data?.user?.contributionsCollection?.contributionYears || [];

    // Only get last 4 years to avoid overwhelming the UI
    const recentYears = years.slice(0, 4);

    // 2. Fetch calendars
    const calendars = await Promise.all(recentYears.map(async (year: number) => {
      const from = `${year}-01-01T00:00:00Z`;
      const to = `${year}-12-31T23:59:59Z`;
      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection(from: "${from}", to: "${to}") {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `;
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 }
      });
      const data = await res.json();
      return {
        year,
        calendar: data.data?.user?.contributionsCollection?.contributionCalendar
      };
    }));

    return calendars;
  } catch (error) {
    console.error("Error fetching github data", error);
    return null;
  }
}
