import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProfessionSlugs,
  getProfessionBySlug,
  formatPrice,
} from "@/lib/professions";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { JsonLd } from "@/components/shared/JsonLd";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = getAllProfessionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profession = getProfessionBySlug(slug);
  if (!profession) return { title: "Not Found" };

  return {
    title: `Free AI Tips for ${profession.title}`,
    description: `${profession.freeTips.length} actionable AI automation tips for ${profession.title.toLowerCase()}. Start implementing AI workflows today.`,
    alternates: {
      canonical: `${SITE_CONFIG.url}/guides/${slug}/tips`,
    },
  };
}

export default async function TipsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profession = getProfessionBySlug(slug);
  if (!profession) notFound();

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Guides", url: `${SITE_CONFIG.url}/guides` },
    { name: profession.title, url: `${SITE_CONFIG.url}/guides/${slug}` },
    { name: "Tips", url: `${SITE_CONFIG.url}/guides/${slug}/tips` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <section
        className="py-16"
        style={{ background: "linear-gradient(to bottom, var(--bg-elevated), var(--bg-primary))" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Free AI Tips for {profession.title}
          </h1>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {profession.freeTips.length} actionable tips you can implement
            today. For the complete setup guide with prompts and templates,{" "}
            <a
              href={`/guides/${slug}#pricing`}
              className="font-semibold underline"
              style={{ color: "var(--text-secondary)" }}
            >
              get the full guide
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          {profession.freeTips.map((tip, index) => (
            <Card key={index} padding="lg">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                  style={{ backgroundColor: "var(--text-secondary)", color: "var(--bg-primary)" }}
                >
                  {index + 1}
                </span>
                <div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {tip.title}
                  </h2>
                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Ready for the Complete Playbook?
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            These tips are just the beginning. The full guide includes{" "}
            {profession.guideTableOfContents.length} chapters of step-by-step
            instructions, copy-paste prompts, and automation workflows.
          </p>
          <div className="mt-8">
            <Button
              href={`/guides/${slug}#pricing`}
              variant="secondary"
              size="lg"
            >
              Get the Full Guide - {formatPrice(profession.guidePrice)}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
