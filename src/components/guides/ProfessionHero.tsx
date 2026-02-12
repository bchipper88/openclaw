import type { Profession } from "@/types";
import { formatPrice } from "@/lib/professions";
import { Button } from "@/components/shared/Button";

interface ProfessionHeroProps {
  profession: Profession;
}

export function ProfessionHero({ profession }: ProfessionHeroProps) {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, var(--bg-secondary), var(--bg-card))",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          <a href="/" className="hover:opacity-80">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/guides" className="hover:opacity-80">
            Guides
          </a>
          <span className="mx-2">/</span>
          <span style={{ color: "var(--text-secondary)" }}>{profession.title}</span>
        </nav>

        <span
          className="inline-block rounded-full px-4 py-1.5 text-sm font-medium"
          style={{
            backgroundColor: "var(--bg-elevated)",
            color: "var(--text-secondary)",
          }}
        >
          {profession.category}
        </span>
        <h1
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          {profession.heroHeadline}
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {profession.heroSubheadline}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button href="#pricing" size="lg">
            Get the Guide - {formatPrice(profession.guidePrice)}
          </Button>
          <Button
            href={`/guides/${profession.slug}/tips`}
            variant="outline"
            size="lg"
          >
            Read Free Tips
          </Button>
        </div>
        <div
          className="mt-6 flex items-center justify-center gap-6 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <span>Instant PDF download</span>
          <span>Copy-paste prompts included</span>
          <span>No technical skills required</span>
        </div>
      </div>
    </section>
  );
}
