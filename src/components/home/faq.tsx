import { Reveal } from "@/components/shared/reveal";

const questions = [
  ["What kind of work do you take on?", "Full-stack web applications, internal tools, performance work, AI-enabled workflows, and focused freelance builds."],
  ["Which technologies do you work with?", "My core stack is TypeScript, Next.js, React, Node.js, MongoDB, PostgreSQL, Firebase, Supabase, Docker, GitHub Actions, and Vercel."],
  ["Can you work with an existing team?", "Yes. I am comfortable in Agile/Scrum environments, peer review, shared Git conventions, and evolving an existing codebase carefully."],
  ["What happens after I send an inquiry?", "I will review the context, reply by email, and suggest a practical next step based on the scope and urgency of the work."],
];

export function FAQ() {
  return (
    <Reveal>
      <section className="faq-section section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">A FEW ANSWERS</p>
            <h2>Before we build.</h2>
          </div>
          <div className="faq-list">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
