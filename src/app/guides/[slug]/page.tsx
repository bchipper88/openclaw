import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProfessionSlugs,
  getProfessionBySlug,
  getRelatedProfessions,
} from "@/lib/professions";
import { getGuideContent } from "@/lib/mdx";
import {
  generateProductJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/shared/JsonLd";
import { ProfessionHero } from "@/components/guides/ProfessionHero";
import { StatsSection } from "@/components/guides/StatsSection";
import { FreeTips } from "@/components/guides/FreeTips";
import { UseCases } from "@/components/guides/UseCases";
import { GuidePreview } from "@/components/guides/GuidePreview";
import { PricingCTA } from "@/components/guides/PricingCTA";
import { AgencyCTA } from "@/components/guides/AgencyCTA";
import { RelatedProfessions } from "@/components/guides/RelatedProfessions";
import { FAQSection } from "@/components/guides/FAQSection";
import { MDXContent } from "@/components/guides/MDXContent";

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
    title: profession.metaTitle,
    description: profession.metaDescription,
    alternates: {
      canonical: `${SITE_CONFIG.url}/guides/${profession.slug}`,
    },
    openGraph: {
      title: profession.metaTitle,
      description: profession.metaDescription,
      url: `${SITE_CONFIG.url}/guides/${profession.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: profession.metaTitle,
      description: profession.metaDescription,
    },
  };
}

export default async function ProfessionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profession = getProfessionBySlug(slug);
  if (!profession) notFound();

  const mdxContent = getGuideContent(slug);
  const related = getRelatedProfessions(slug);

  const productJsonLd = generateProductJsonLd(profession);
  const faqJsonLd = generateFAQJsonLd(profession.faq);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Guides", url: `${SITE_CONFIG.url}/guides` },
    {
      name: profession.title,
      url: `${SITE_CONFIG.url}/guides/${profession.slug}`,
    },
  ]);

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ProfessionHero profession={profession} />

      <StatsSection stats={profession.stats} />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-900">
            How AI Transforms Work for {profession.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-600">
            {profession.overview}
          </p>
          {mdxContent && (
            <div className="mt-8">
              <MDXContent source={mdxContent.content} />
            </div>
          )}
        </div>
      </section>

      <FreeTips
        tips={profession.freeTips}
        professionTitle={profession.title}
        tipsPageHref={`/guides/${profession.slug}/tips`}
      />

      <UseCases useCases={profession.useCases} />

      <GuidePreview
        tableOfContents={profession.guideTableOfContents}
        professionTitle={profession.title}
      />

      <PricingCTA profession={profession} />

      {profession.agencyAvailable && (
        <AgencyCTA professionTitle={profession.title} />
      )}

      <FAQSection faq={profession.faq} />

      {related.length > 0 && <RelatedProfessions professions={related} />}
    </>
  );
}
