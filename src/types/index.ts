export interface Profession {
  slug: string;
  title: string;
  category: string;
  tier: 1 | 2 | 3;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  benefits: string[];
  freeTips: FreeTip[];
  useCases: UseCase[];
  tools: string[];
  stats: ProfessionStats;
  guidePrice: number; // in cents (e.g., 3900 = $39.00)
  stripePriceId: string;
  relatedProfessions: string[]; // slugs
  faq: FAQItem[];
  guideTableOfContents: string[];
  agencyAvailable: boolean;
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
}

export interface FreeTip {
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  tools: string[];
}

export interface ProfessionStats {
  adoptionRate: string;
  timeSaved: string;
  roiIncrease: string;
  source?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  professionSlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  relatedProfessions: string[];
}

export interface CheckoutRequest {
  professionSlug: string;
  stripePriceId: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  ogImage: string;
}
