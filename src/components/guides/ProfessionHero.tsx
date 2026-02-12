import type { Profession } from "@/types";
import { formatPrice } from "@/lib/professions";
import { Button } from "@/components/shared/Button";

interface ProfessionHeroProps {
  profession: Profession;
}

export function ProfessionHero({ profession }: ProfessionHeroProps) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-brand-400">
          <a href="/" className="hover:text-brand-600">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/guides" className="hover:text-brand-600">
            Guides
          </a>
          <span className="mx-2">/</span>
          <span className="text-brand-600">{profession.title}</span>
        </nav>

        <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
          {profession.category}
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
          {profession.heroHeadline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-brand-500">
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
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-brand-400">
          <span>Instant PDF download</span>
          <span>Copy-paste prompts included</span>
          <span>No technical skills required</span>
        </div>
      </div>
    </section>
  );
}
