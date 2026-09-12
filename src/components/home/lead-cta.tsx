import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/shared/reveal";

export function LeadCTA() {
  return (
    <Reveal>
      <section className="lead-cta section">
        <div className="container lead-cta-inner">
          <div>
            <p className="eyebrow">A GOOD NEXT STEP</p>
            <h2>
              Have a rough idea?
              <br />
              <span>That&apos;s enough to start.</span>
            </h2>
          </div>
          <a className="button button-primary" href="#contact">
            Tell me about it{" "}
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={17}
              color="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </Reveal>
  );
}
