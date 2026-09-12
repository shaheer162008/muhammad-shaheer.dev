import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/shared/reveal";
import { IdeMockup } from "@/components/home/ide-mockup";

export function SelectedWork() {
  return (
    <Reveal>
      <section id="work" className="section work-section">
        <div className="container">
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Proof over promises.</h2>
            </div>
            <p>
              Real systems, measurable outcomes and thoughtful engineering.
              A few projects I can talk about.
            </p>
          </div>

          {/* Featured project */}
          <article className="featured-project">
            <div className="project-visual">
              <IdeMockup />
            </div>

            <div className="project-copy">
              <p className="eyebrow">01 · GOVERNMENT OPERATIONS</p>
              <h3>Legal case management,<br />built for scale.</h3>
              <p>
                A full-stack internal tool for the Sindh Education Department,
                helping staff manage legal cases and documents with clarity and
                JWT role-based access control.
              </p>
              <dl className="project-meta">
                <div>
                  <dt>Role</dt>
                  <dd>Full Stack Developer</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>Next.js · Node.js · MongoDB</dd>
                </div>
                <div>
                  <dt>Auth</dt>
                  <dd>JWT role-based control</dd>
                </div>
              </dl>
              <a
                className="text-link"
                href="mailto:shaheer.yousuf.dev@gmail.com?subject=Legal%20Dashboard%20case%20study"
              >
                Request the case study{" "}
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={14}
                  color="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>

          {/* Mini project grid */}
          <div className="project-list">
            <article>
              <p className="eyebrow">02 · PRIVATE CLIENT</p>
              <h3>Laboratory Management System</h3>
              <p>Online receipt and report generation built for a private laboratory client — full-stack with SQL-based data management.</p>
              <span className="project-tag">Next.js · SQL · Reports</span>
            </article>
            <article>
              <p className="eyebrow">03 · AUTOMATION</p>
              <h3>AI pipelines that create momentum.</h3>
              <p>Automation and web solutions that helped clients increase lead inquiry rates, built with TypeScript and deployed via CI/CD on Vercel.</p>
              <span className="project-tag">AI · TypeScript · Vercel</span>
            </article>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
