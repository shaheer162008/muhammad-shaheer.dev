import Link from "next/link";

const topics = ["TypeScript and Next.js", "Performance and technical SEO", "Agentic AI in useful products", "Architecture for internal tools"];

export default function BlogPage() {
  return (
    <>
      <header className="site-header"><nav className="nav container" aria-label="Main navigation"><Link className="brand" href="/"><span>MS</span> Muhammad Shaheer</Link><div className="desktop-nav"><Link href="/#contributions">Contributions</Link><Link href="/#projects">Projects</Link><Link href="/#skills">Skills</Link><Link href="/#contact">Contact</Link><Link className="nav-resume" href="/muhammad_shaheer-resume.pdf">Resume</Link></div><details className="mobile-menu"><summary>Menu</summary><div className="mobile-links"><Link href="/#contributions">Contributions</Link><Link href="/#projects">Projects</Link><Link href="/#skills">Skills</Link><Link href="/#contact">Contact</Link></div></details></nav></header>
      <main className="blog-page"><section className="blog-hero container"><p className="eyebrow">FIELD NOTES</p><h1>Notes from the<br /><span>build process.</span></h1><p>Short technical writing about the systems, decisions, and experiments behind my work.</p></section><section className="blog-empty section"><div className="container"><div className="blog-terminal"><span>shaheer@karachi</span>:~$ ls notes/<br /><br /><b>directory is being written</b><br /><br />The first notes will cover the topics below. For a practical conversation about a project, email me directly.</div><div className="topic-list">{topics.map((topic, index) => <div key={topic}><span>0{index + 1}</span><strong>{topic}</strong><em>drafting</em></div>)}</div><Link className="button" href="/#contact">Discuss a project</Link></div></section></main><footer className="site-footer"><div className="container footer-row"><span>© 2026 Muhammad Shaheer · Built with Next.js</span><div><Link href="/">Home</Link><a href="https://github.com/shaheer162008">GitHub</a><a href="/muhammad_shaheer-resume.pdf">Resume</a></div></div></footer>
    </>
  );
}
