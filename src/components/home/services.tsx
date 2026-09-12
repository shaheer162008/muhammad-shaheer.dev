import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ArtificialIntelligence02Icon,
  ChartIncreaseIcon,
  CodeIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/shared/reveal";

const services = [
  {
    icon: CodeIcon,
    number: "01",
    title: "Full-stack products",
    description:
      "TypeScript and Next.js applications with dependable Node.js backends, data models, and role-aware workflows.",
  },
  {
    icon: ArtificialIntelligence02Icon,
    number: "02",
    title: "AI-powered workflows",
    description:
      "Practical automation, agentic AI experiments, prompt engineering, and chatbot integrations tied to real business outcomes.",
  },
  {
    icon: ChartIncreaseIcon,
    number: "03",
    title: "Performance that holds up",
    description:
      "Performance tuning, technical SEO, testing, and CI/CD work that keeps products fast and maintainable long after launch.",
  },
];

export function Services() {
  return (
    <Reveal>
      <section id="services" className="services-section section">
        <div className="container">
          <div className="section-intro">
            <h2>
              Useful software,
              <br />
              <span>carefully shipped.</span>
            </h2>
            <p>
              I work across product thinking and implementation — so the final
              experience is clear for users and practical for the team
              maintaining it.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <div className="service-icon" aria-hidden="true">
                    <HugeiconsIcon
                      icon={service.icon}
                      size={22}
                      color="currentColor"
                      strokeWidth={1.7}
                    />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-link" href="#contact">
                  Discuss this{" "}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={14}
                    color="currentColor"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
