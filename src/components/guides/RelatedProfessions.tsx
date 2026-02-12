import type { Profession } from "@/types";
import { ProfessionCard } from "./ProfessionCard";

interface RelatedProfessionsProps {
  professions: Profession[];
}

export function RelatedProfessions({ professions }: RelatedProfessionsProps) {
  return (
    <section className="bg-brand-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-brand-900">
          You Might Also Like
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professions.map((profession) => (
            <ProfessionCard key={profession.slug} profession={profession} />
          ))}
        </div>
      </div>
    </section>
  );
}
