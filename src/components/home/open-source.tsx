import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const REPO = "shaheer162008/muhammad-shaheer.dev";
const REPO_URL = `https://github.com/${REPO}`;

interface RepoStats {
  description: string | null;
  stars: number;
  forks: number;
}

async function getRepoStats(): Promise<RepoStats> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      next: { revalidate: 60 * 60 }, // refresh hourly
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error("GitHub API error");
    const data = await res.json();
    return {
      description: data.description ?? null,
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
    };
  } catch {
    return { description: null, stars: 0, forks: 0 };
  }
}

export async function OpenSource() {
  const { description, stars, forks } = await getRepoStats();

  return (
    <Reveal>
      <section id="open-source" className="section opensource-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OPEN SOURCE</p>
              <h2>Built in public.</h2>
            </div>
            <p>
              This entire site code, design system, and this GitHub graph is public.
              Clone it, learn from it, or open a PR.
            </p>
          </div>

          <div className="opensource-card">
            <div className="opensource-card-head">
              <div className="opensource-repo-name">
                <img src="/icons/github.svg" alt="GitHub" width={18} height={18} aria-hidden="true" />
                <span>{REPO}</span>
              </div>
              <div className="opensource-stats">
                <span>
                  <Star size={14} aria-hidden="true" /> {stars}
                </span>
                <span>
                  <GitFork size={14} aria-hidden="true" /> {forks}
                </span>
              </div>
            </div>

            <div className="opensource-card-body">
              <p>
                {description ??
                  "My personal portfolio site Next.js, MongoDB, and a fully custom design system, open for anyone to explore."}
              </p>

              <div className="opensource-actions">
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  <img src="/icons/github.svg" alt="GitHub" width={18} height={18} aria-hidden="true" />
                  View Repository
                </a>
                <a
                  href={`${REPO_URL}/stargazers`}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  <Star size={18} aria-hidden="true" />
                  Star this repo
                </a>
              </div>
            </div>
          </div>

          <div className="opensource-socials">
            <p>Building this in public follow along or say hi.</p>
            <div className="opensource-social-links">
              <a
                href="https://www.instagram.com/shaheer__yousuf"
                target="_blank"
                rel="noreferrer"
                className="opensource-social-link"
              >
                <img src="/icons/instagram.svg" alt="Instagram" width={16} height={16} aria-hidden="true" />
                <span>@shaheer__yousuf</span>
                <ArrowUpRight size={14} aria-hidden="true" className="opensource-social-arrow" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-shaheer-yousuf/"
                target="_blank"
                rel="noreferrer"
                className="opensource-social-link"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} aria-hidden="true" />
                <span>Muhammad Shaheer</span>
                <ArrowUpRight size={14} aria-hidden="true" className="opensource-social-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}