import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { getGitHubContributions } from "@/lib/github";
import { GitHubCalendarClient } from "@/components/home/github-calendar-client";
import { OpenSource } from "@/components/home/open-source";

export async function GitHubActivity() {
  const username = "shaheer162008";
  const calendars = await getGitHubContributions(username);

  return (
    <>
      <Reveal>
        <section id="contributions" className="section github-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">GITHUB ACTIVITY</p>
                <h2>Consistency over noise.</h2>
              </div>
              <p>
                Public contribution history from{" "}
                <a
                  className="text-link"
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/{username}
                </a>
              </p>
            </div>

            <div className="github-cards">
              {/* Streak stats */}
              <div className="github-card">
                <div className="github-card-head">
                  <h3>Contribution streak</h3>
                  <span>Live public activity</span>
                </div>
                <div className="github-card-body" style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={`https://streak-stats.demolab.com?user=${username}&theme=dark&hide_border=true&background=101010&ring=00d992&fire=00d992&currStreakLabel=00d992`}
                    alt="Muhammad Shaheer GitHub contribution streak"
                    width={600}
                    height={220}
                    unoptimized
                    style={{ width: "100%", maxWidth: "600px", objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Contribution graph (Custom Lifetime / Fallback) */}
              <div className="github-card">
                <div className="github-card-head">
                  <h3>Lifetime Contributions</h3>
                  <span>{calendars ? "Interactive Graph" : "Last 12 months"}</span>
                </div>
                <div className="github-card-body" style={{ flexDirection: "column", alignItems: "center" }}>
                  
                  {calendars ? (
                    <GitHubCalendarClient calendars={calendars} />
                  ) : (
                    <>
                      <Image
                        src={`https://ghchart.rshah.org/00d992/${username}`}
                        alt="Muhammad Shaheer GitHub contribution graph"
                        width={1100}
                        height={160}
                        unoptimized
                        style={{ width: "100%", maxWidth: "900px", filter: "saturate(0.9)" }}
                      />
                      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                        <p className="github-private-note" style={{ margin: 0 }}>
                          * Add <code style={{ color: "var(--green)" }}>GITHUB_TOKEN</code> to <code>.env.local</code> to unlock the interactive lifetime heatmap.
                        </p>
                        <a href="https://github.com/shaheer162008/muhammad-shaheer.dev" target="_blank" rel="noreferrer" className="text-link" style={{ fontSize: "11px" }}>
                          View Source Code
                        </a>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <OpenSource />
    </>
  );

}