import type { Profession, FAQItem } from "@/types";
import { SITE_CONFIG } from "./constants";

export function generateProductJsonLd(profession: Profession) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `AI Workflow Guide for ${profession.title}`,
    description: profession.metaDescription,
    image: `${SITE_CONFIG.url}/images/professions/${profession.slug}.png`,
    offers: {
      "@type": "Offer",
      price: (profession.guidePrice / 100).toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.url}/guides/${profession.slug}`,
    },
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
  };
}

export function generateFAQJsonLd(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function sanitizeJsonLd(jsonLd: object): string {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}
