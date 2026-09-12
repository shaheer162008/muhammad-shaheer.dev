import { Reveal } from "@/components/shared/reveal";

const skills = [
  { label: "Frontend", items: "Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3" },
  { label: "Backend", items: "Node.js, Express, REST APIs, GraphQL" },
  { label: "Data & cloud", items: "MongoDB, PostgreSQL, Supabase, Firebase, Firestore, Cloud Build" },
  { label: "AI systems", items: "Agentic AI, Google AI Studio, Prompt Engineering, Chatbot Integration" },
  { label: "Delivery", items: "Git, GitHub Actions, Docker, Vercel, Jest, Technical SEO" },
];

export function About() {
  return (
    <Reveal>
      <section id="about" className="section container">
        <div className="about-grid">
          <div>
            <p className="eyebrow">THE SHORT VERSION</p>
            <h2>Engineering with a wider view.</h2>
            <p className="large-copy">
              I&apos;m a Full Stack Developer with 3+ years of experience building
              TypeScript and Next.js applications for SMBs and government clients.
              I care about performance, reliable delivery and the human workflow
              behind every feature.
            </p>
            <p>
              My toolkit spans Node.js, MongoDB, PostgreSQL, Supabase, Firebase,
              Docker and GitHub Actions. I&apos;m also exploring agentic AI, prompt
              engineering and chatbot integration through hands-on projects and
              focused certifications.
            </p>
            <a className="text-link" href="mailto:shaheer.yousuf.dev@gmail.com">
              Let&apos;s talk about your product <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div id="toolkit" className="skills-panel">
            <p className="eyebrow">TOOLKIT</p>
            {skills.map((skill) => (
              <div className="skill-row" key={skill.label}>
                <h3>{skill.label}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
