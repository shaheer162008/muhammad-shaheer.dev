import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Hero } from "@/components/home/hero";
import { ProofStrip } from "@/components/home/proof-strip";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { Experience } from "@/components/home/experience";
import { About } from "@/components/home/about";
import { Process } from "@/components/home/process";
import { GitHubActivity } from "@/components/home/github-activity";
import { Credentials } from "@/components/home/credentials";
import { FAQ } from "@/components/home/faq";
import { LeadCTA } from "@/components/home/lead-cta";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader home />

      <main id="main-content">
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Proof strip (metrics) */}
        <ProofStrip />

        {/* 3 — Selected work / case studies */}
        <SelectedWork />

        {/* 4 — Services */}
        <Services />

        {/* 5 — Experience timeline */}
        <Experience />

        {/* 6 — About + Toolkit */}
        <About />

        {/* 7 — How I work / Process */}
        <Process />

        {/* 8 — GitHub activity */}
        <GitHubActivity />

        {/* 9 — Education & Credentials */}
        <Credentials />

        {/* 10 — FAQ */}
        <FAQ />

        {/* 11 — Lead CTA */}
        <LeadCTA />

        {/* 12 — Contact */}
        <Contact />
      </main>

      <SiteFooter />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </>
  );
}
