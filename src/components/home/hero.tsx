import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HeroHeadline } from "@/components/home/hero-headline";
import { HeroTerminal } from "@/components/home/hero-terminal";

export function Hero() {
  return (
    <section id="top" className="hero-band">
      {/* Animated dot-grid mesh */}
      <div className="hero-mesh" aria-hidden="true" />
      {/* Radial green glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-content">
        {/* Availability kicker */}
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Available for select freelance projects
          <span>Karachi, Pakistan</span>
        </div>

        <div className="hero-layout">
          {/* LEFT: Copy */}
          <div className="hero-copy">
            <p className="eyebrow">FULL STACK WEB DEVELOPER · 001</p>

            <HeroHeadline />

            <p className="hero-lede">
              TypeScript, Next.js and AI-powered tools for ambitious teams,
              SMBs and public-sector clients.
            </p>

            <HeroTerminal />

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work{" "}
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={17}
                  color="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
              <a className="button button-secondary" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>

          {/* RIGHT: Code mockup + stats */}
          <div className="hero-proof">
            {/* Code panel */}
            <div className="hero-mockup" role="img" aria-label="Code snippet showing Muhammad Shaheer's work">
              <div className="mockup-bar">
                <span /><span /><span />
                <small>shaheer.dev / deploy</small>
              </div>
              <div className="mockup-body">
                <div>
                  <span className="ln">1</span>{" "}
                  <span className="cm">{/* CaseFlow — Sindh Education Dept. */}</span>
                </div>
                <div>
                  <span className="ln">2</span>{" "}
                  <span className="kw">const</span>{" "}
                  <span className="var">stack</span> ={" "}
                  <span className="str">"Next.js + MongoDB"</span>;
                </div>
                <div>
                  <span className="ln">3</span>{" "}
                  <span className="kw">const</span>{" "}
                  <span className="var">lighthouse</span> ={" "}
                  <span className="num">91</span>;
                  <span className="cm">{/* was 58 */}</span>
                </div>
                <div>
                  <span className="ln">4</span>{" "}
                  <span className="kw">const</span>{" "}
                  <span className="var">ai</span> ={" "}
                  <span className="fn">integrateAgents</span>(<span className="str">&quot;pipelines&quot;</span>);
                </div>
                <div style={{ marginTop: "12px" }}>
                  <span className="ln">5</span>{" "}
                  <span className="ok">✓ TypeScript checked · 0 errors</span>
                </div>
                <div>
                  <span className="ln">6</span>{" "}
                  <span className="ok">✓ Tests passing · deploy ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
