import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FileTextIcon,
  GithubIcon,
  Linkedin01Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p>© 2026 Muhammad Shaheer. Built with Next.js.</p>
        <div className="footer-socials">
          <Link href="/blog" aria-label="Blog" title="Blog">
            Blog
          </Link>
          <a
            href="https://github.com/shaheer162008"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              size={16}
              color="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-shaheer-yousuf"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <HugeiconsIcon
              icon={Linkedin01Icon}
              size={16}
              color="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
          <a
            href="https://www.instagram.com/shaheer__yousuf/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <HugeiconsIcon
              icon={InstagramIcon}
              size={16}
              color="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
          <a
            href="/muhammad_shaheer-resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume"
            title="Resume"
          >
            <HugeiconsIcon
              icon={FileTextIcon}
              size={16}
              color="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
