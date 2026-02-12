import Link from "next/link";
import type { Profession } from "@/types";
import { formatPrice } from "@/lib/professions";
import { Card } from "@/components/shared/Card";

interface ProfessionCardProps {
  profession: Profession;
  compact?: boolean;
}

export function ProfessionCard({
  profession,
  compact = false,
}: ProfessionCardProps) {
  if (compact) {
    return (
      <Link
        href={`/guides/${profession.slug}`}
        className="flex items-center gap-3 rounded-lg border border-brand-100 bg-white p-4 transition-all hover:border-brand-300 hover:shadow-sm"
      >
        <div className="flex-1">
          <h3 className="font-medium text-brand-800">{profession.title}</h3>
          <p className="text-sm text-brand-400">{profession.category}</p>
        </div>
        <span className="text-sm font-semibold text-brand-600">
          {formatPrice(profession.guidePrice)}
        </span>
      </Link>
    );
  }

  return (
    <Card className="flex flex-col transition-all hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
          {profession.category}
        </span>
        {profession.tier === 1 && (
          <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white">
            Popular
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-brand-900">
        AI Workflows for {profession.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-brand-500">
        {profession.overview.substring(0, 150)}...
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {profession.tools.slice(0, 3).map((tool) => (
          <span
            key={tool}
            className="rounded bg-brand-50 px-2 py-1 text-xs text-brand-600"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-brand-100 pt-4">
        <span className="text-lg font-bold text-brand-800">
          {formatPrice(profession.guidePrice)}
        </span>
        <Link
          href={`/guides/${profession.slug}`}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          View Guide
        </Link>
      </div>
    </Card>
  );
}
