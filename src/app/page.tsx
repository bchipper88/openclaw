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
      <section
        className="py-20"
        style={{ background: "linear-gradient(to bottom, var(--bg-elevated), var(--bg-primary))" }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            OpenClaw Setup Guides for{" "}
            <span style={{ color: "var(--text-secondary)" }}>Every Profession</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Deploy the open-source AI agent for your industry. Step-by-step
            setup guides to run OpenClaw locally with persistent memory,
            5,700+ ClawHub skills, and 24/7 autonomous operation.
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
      <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SearchFilter categories={categories} />
        </div>
      </section>

      {/* Featured Professions (Tier 1) */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Most Popular Guides
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-center"
            style={{ color: "var(--text-muted)" }}
          >
            Our highest-demand OpenClaw setup guides, trusted by thousands of
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
      <section className="py-16" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Choose Your Profession",
                description:
                  "Browse our directory or search for your specific role to find an OpenClaw setup guide tailored to your workflow.",
              },
              {
                step: "2",
                title: "Get Your OpenClaw Setup Guide",
                description:
                  "Download your comprehensive guide with ClawHub skill recommendations, messaging integrations, and automation templates.",
              },
              {
                step: "3",
                title: "Deploy & Automate",
                description:
                  "Follow the guide to deploy OpenClaw locally with the right skills installed. Free, open-source, and your data stays private.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
                  style={{ backgroundColor: "var(--text-secondary)", color: "var(--bg-primary)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="mt-4 text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2" style={{ color: "var(--text-muted)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Professions Directory */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
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
      <section className="py-16" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
