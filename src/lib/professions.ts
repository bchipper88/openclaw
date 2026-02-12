import professionsData from "@/data/professions.json";
import categoriesData from "@/data/categories.json";
import type { Profession, Category } from "@/types";

const professions: Profession[] = professionsData as Profession[];
const categories: Category[] = categoriesData as Category[];

export function getAllProfessions(): Profession[] {
  return professions;
}

export function getProfessionBySlug(slug: string): Profession | undefined {
  return professions.find((p) => p.slug === slug);
}

export function getProfessionsByTier(tier: 1 | 2 | 3): Profession[] {
  return professions.filter((p) => p.tier === tier);
}

export function getProfessionsByCategory(categorySlug: string): Profession[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return professions.filter((p) =>
    category.professionSlugs.includes(p.slug)
  );
}

export function getRelatedProfessions(slug: string): Profession[] {
  const profession = getProfessionBySlug(slug);
  if (!profession) return [];
  return profession.relatedProfessions
    .map((relSlug) => getProfessionBySlug(relSlug))
    .filter((p): p is Profession => p !== undefined);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getAllProfessionSlugs(): string[] {
  return professions.map((p) => p.slug);
}

export function searchProfessions(query: string): Profession[] {
  const lower = query.toLowerCase();
  return professions.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.overview.toLowerCase().includes(lower)
  );
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(priceInCents / 100);
}
