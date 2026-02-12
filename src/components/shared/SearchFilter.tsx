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
    <div
      className="rounded-xl border p-6 shadow-sm"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--bg-card)",
      }}
    >
      <form onSubmit={handleSearch} className="flex gap-4">
        <input
          type="text"
          placeholder="Search by profession, industry, or tool..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
            backgroundColor: "var(--bg-primary)",
          }}
        />
        <button
          type="submit"
          className="rounded-lg px-6 py-3 font-semibold transition-colors"
          style={{
            backgroundColor: "var(--text-secondary)",
            color: "#fff",
          }}
        >
          Search
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => router.push(`/guides?category=${category.slug}`)}
            className="rounded-full border px-3 py-1 text-sm transition-colors"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
