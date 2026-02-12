"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Category } from "@/types";

interface SearchFilterProps {
  categories: Category[];
}

export function SearchFilter({ categories }: SearchFilterProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/guides?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
      <form onSubmit={handleSearch} className="flex gap-4">
        <input
          type="text"
          placeholder="Search by profession, industry, or tool..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border border-brand-200 px-4 py-3 text-brand-800 placeholder-brand-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
        <button
          type="submit"
          className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Search
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => router.push(`/guides?category=${category.slug}`)}
            className="rounded-full border border-brand-200 px-3 py-1 text-sm text-brand-600 transition-colors hover:bg-brand-50"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
