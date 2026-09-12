import { Reveal } from "@/components/shared/reveal";

const steps = [
  ["01", "Understand", "Align on the user, the workflow, and the outcome before choosing the implementation."],
  ["02", "Shape", "Turn the rough idea into a focused scope, useful interface, and architecture the team can own."],
  ["03", "Build", "Ship in clear increments with TypeScript, tests, version control, and feedback close to the work."],
  ["04", "Improve", "Measure what matters, remove friction, and keep the product reliable after release."],
];

export function Process() {
  return (
    <Reveal>
      <section className="process-section section">
        <div className="container">
          <div className="process-heading">
            <p className="eyebrow">HOW I WORK</p>
            <h2>
              From first question
              <br />
              to shipped product.
            </h2>
          </div>
          <div className="process-list">
            {steps.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
