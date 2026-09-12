import Link from "next/link";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const anchor = home ? "#" : "/";
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link
          className="brand"
          href={anchor}
          aria-label="Muhammad Shaheer home"
        >
          <span className="brand-mark">MS</span>
          Muhammad Shaheer
        </Link>

        <div className="desktop-nav">
          <Link href={home ? "#work" : "/#work"}>Work</Link>
          <Link href={home ? "#services" : "/#services"}>Services</Link>
          <Link href={home ? "#experience" : "/#experience"}>Experience</Link>
          <Link href={home ? "#about" : "/#about"}>About</Link>
          <Link href={home ? "#contributions" : "/#contributions"}>GitHub</Link>
          <Link href="/blog">Blog</Link>
          <Link href={home ? "#contact" : "/#contact"}>Contact</Link>
          <a
            className="nav-resume"
            href="/muhammad_shaheer-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span aria-hidden="true">Menu</span>
          </summary>
          <div className="mobile-links">
            <Link href={home ? "#work" : "/#work"}>Work</Link>
            <Link href={home ? "#services" : "/#services"}>Services</Link>
            <Link href={home ? "#experience" : "/#experience"}>Experience</Link>
            <Link href={home ? "#about" : "/#about"}>About</Link>
            <Link href={home ? "#contributions" : "/#contributions"}>GitHub</Link>
            <Link href="/blog">Blog</Link>
            <Link href={home ? "#contact" : "/#contact"}>Contact</Link>
            <a href="/muhammad_shaheer-resume.pdf" target="_blank" rel="noreferrer">
              Download resume ↗
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
