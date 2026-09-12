import { Reveal } from "@/components/shared/reveal";

const certifications = [
  ["Agentic AI Developer", "PIAIC · Jan 2026"],
  ["Develop Serverless Apps with Firebase", "Google · Apr 2026"],
  ["Develop AI-Powered Prototypes in Google AI Studio", "Google · Apr 2026"],
  ["Cyber Security Fundamentals", "AlKhidmat Bano Qabil & LRN UK · Oct 2025"],
  ["Digital Forensics and Ethical Hacking", "AlKhidmat Bano Qabil & LRN UK · Feb 2026"],
];

export function Credentials() {
  return (
    <Reveal>
      <section className="dark-band">
        <div className="container dark-grid">
          <div>
            <p className="eyebrow">EDUCATION &amp; CREDENTIALS</p>
            <h2>
              Always learning.
              <br />
              Still shipping.
            </h2>
            <div className="education">
              <strong>Associate Software Engineering</strong>
              <span>Jinnah Polytechnic Institute, Karachi</span>
              <small>Final Year · Nov 2024 — Nov 2027</small>
            </div>
          </div>

          <div className="certifications">
            <p className="eyebrow">CERTIFICATIONS</p>
            {certifications.map(([name, meta]) => (
              <div className="certification" key={name}>
                <strong>{name}</strong>
                <span>{meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
