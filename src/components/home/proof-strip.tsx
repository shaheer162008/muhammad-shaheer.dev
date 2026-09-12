import { Reveal } from "@/components/shared/reveal";

export function ProofStrip() {
  return (
    <Reveal>
      <section className="proof-strip" aria-label="Career highlights">
        <div className="container proof-grid">
          <div>
            <strong>3+</strong>
            <span>Years building</span>
          </div>
          <div>
            <strong>58 → 91</strong>
            <span>Average Lighthouse score</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Client sites optimized</span>
          </div>
          <div>
            <strong>AI + Web</strong>
            <span>Where I do my best work</span>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
