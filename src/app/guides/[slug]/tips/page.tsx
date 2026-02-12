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

      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-900">
            Free AI Tips for {profession.title}
          </h1>
          <p className="mt-4 text-lg text-brand-500">
            {profession.freeTips.length} actionable tips you can implement
            today. For the complete setup guide with prompts and templates,{" "}
            <a
              href={`/guides/${slug}#pricing`}
              className="font-semibold text-brand-600 underline"
            >
              get the full guide
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          {profession.freeTips.map((tip, index) => (
            <Card key={index} padding="lg">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-brand-800">
                    {tip.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-brand-600">
                    {tip.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready for the Complete Playbook?
          </h2>
          <p className="mt-4 text-lg text-brand-100">
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
