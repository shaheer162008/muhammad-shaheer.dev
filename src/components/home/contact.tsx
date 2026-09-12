import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Location01Icon,
  Mail01Icon,
  PhoneIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/shared/reveal";

export function Contact() {
  return (
    <Reveal>
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div className="contact-intro">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let&apos;s make something
              <br />
              <em>worth shipping.</em>
            </h2>
            <p>
              Tell me a little about what you&apos;re building. I&apos;ll get back to you
              with a thoughtful next step.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact form */}
            <form
              className="contact-form"
              action="mailto:shaheer.yousuf.dev@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label htmlFor="contact-name">
                Your name
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Muhammad or your team…"
                  required
                />
              </label>
              <label htmlFor="contact-email">
                Email address
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label htmlFor="contact-message">
                What are you building?
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="A short brief about your project…"
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Send inquiry{" "}
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={17}
                  color="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </button>
            </form>

            {/* Contact card */}
            <div className="contact-card">
              <p className="eyebrow">DIRECT LINE</p>

              <a
                className="contact-item"
                href="mailto:shaheer.yousuf.dev@gmail.com"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span>
                  <small>Email</small>
                  <span>shaheer.yousuf.dev@gmail.com</span>
                </span>
              </a>

              <a className="contact-item" href="tel:+923072853163">
                <HugeiconsIcon
                  icon={PhoneIcon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span>
                  <small>Phone</small>
                  <span>+92 307 2853163</span>
                </span>
              </a>

              <div className="contact-item">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span>
                  <small>Based in</small>
                  <span>Karachi, Pakistan</span>
                </span>
              </div>

              <div className="contact-card-links">
                <a
                  href="https://github.com/shaheer162008"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub{" "}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={13}
                    color="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-shaheer-yousuf"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn{" "}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={13}
                    color="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.instagram.com/shaheer__yousuf/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram{" "}
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={13}
                    color="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
