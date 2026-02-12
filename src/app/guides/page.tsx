import type { Metadata } from "next";
import { getAllProfessions, getAllCategories } from "@/lib/professions";
import { ProfessionCard } from "@/components/guides/ProfessionCard";
import { SearchFilter } from "@/components/shared/SearchFilter";

export const metadata: Metadata = {
  title: "All OpenClaw Setup Guides",
  description:
    "Browse our complete directory of OpenClaw setup guides for every profession. Deploy the open-source AI agent with step-by-step instructions for your role.",
};

export default function GuidesPage() {
  const professions = getAllProfessions();
  const categories = getAllCategories();

  return (
    <div className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            OpenClaw Setup Guides
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Find the perfect OpenClaw deployment guide for your profession. Each
            guide includes ClawHub skill recommendations, messaging integration
            setup, custom automation templates, and step-by-step instructions.
          </p>
        </div>

        <div className="mt-10">
          <SearchFilter categories={categories} />
        </div>

        {categories.map((category) => {
          const categoryProfessions = professions.filter((p) =>
            category.professionSlugs.includes(p.slug)
          );
          if (categoryProfessions.length === 0) return null;

          return (
            <section key={category.slug} className="mt-16">
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {category.name}
              </h2>
              <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                {category.description}
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProfessions.map((profession) => (
                  <ProfessionCard
                    key={profession.slug}
                    profession={profession}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
