import { getAllProfessions, getProfessionsByTier } from "@/lib/professions";
import { getAllCategories } from "@/lib/professions";
import { ProfessionCard } from "@/components/guides/ProfessionCard";
import { Button } from "@/components/shared/Button";
import { SearchFilter } from "@/components/shared/SearchFilter";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { JsonLd } from "@/components/shared/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  const tier1 = getProfessionsByTier(1);
  const allProfessions = getAllProfessions();
  const categories = getAllCategories();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
            AI Workflow Guides for{" "}
            <span className="text-brand-600">Every Profession</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-brand-500">
            Step-by-step setup guides with prompts, templates, and automations.
            Stop experimenting with AI &mdash; start implementing it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button href="/guides" size="lg">
              Browse All Guides
            </Button>
            <Button href="/hire-us" variant="outline" size="lg">
              Hire Us to Set It Up
            </Button>
          </div>
        </div>
      </section>

      {/* Search / Filter Section */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SearchFilter categories={categories} />
        </div>
      </section>

      {/* Featured Professions (Tier 1) */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-brand-900">
            Most Popular Guides
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-brand-500">
            Our highest-demand AI workflow guides, trusted by thousands of
            professionals.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tier1.map((profession) => (
              <ProfessionCard key={profession.slug} profession={profession} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-brand-900">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Find Your Profession",
                description:
                  "Browse our directory or search for your specific role to find a guide tailored to your workflow.",
              },
              {
                step: "2",
                title: "Get the Guide",
                description:
                  "Purchase your comprehensive setup guide with prompts, templates, and step-by-step instructions.",
              },
              {
                step: "3",
                title: "Implement in Hours",
                description:
                  "Follow the guide to set up AI workflows that save you 10+ hours per week. No technical skills required.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-brand-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Professions Directory */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-brand-900">
            All Profession Guides
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allProfessions.map((profession) => (
              <ProfessionCard
                key={profession.slug}
                profession={profession}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
