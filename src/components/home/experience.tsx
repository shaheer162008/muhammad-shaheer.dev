import { Reveal } from "@/components/shared/reveal";

const experience = [
  {
    company: "Nexiler",
    role: "Full Stack Developer",
    date: "Feb 2026 — Sep 2026",
    detail:
      "Built AI-integrated automation pipelines and TypeScript / Next.js solutions through CI/CD on Vercel. Improved average Lighthouse scores from 58 to 91 across 6 client sites through performance optimization and SEO-focused development.",
  },
  {
    company: "Syntrix Solutions",
    role: "Full Stack Developer",
    date: "Jan 2025 — Jan 2026",
    detail:
      "Led full-stack delivery of a legal dashboard for all Sindh Education Department staff using Next.js, MongoDB and JWT-based role access control. Established TypeScript standards, Git conventions and scalable architecture that reduced onboarding time.",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer · Part-time",
    date: "Jan 2023 — Present",
    detail:
      "Built a Laboratory Management System with online receipt and report generation for a private client. Delivered full-stack and SQL-based web solutions for referral clients across multiple industries.",
  },
  {
    company: "Virtuo Edge",
    role: "Full Stack Developer",
    date: "Dec 2022 — Dec 2024",
    detail:
      "Shipped production features over 2+ years using Next.js, Node.js, MongoDB, Firebase and REST APIs. Maintained code quality through peer reviews, Jest testing and Git version control.",
  },
];

export function Experience() {
  return (
    <Reveal>
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2>Shipping with intent.</h2>
            </div>
            <p>
              From government systems to high-performing client sites, I care
              about the details that make software useful after launch.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-date">{item.date}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
