import type { ProfessionStats } from "@/types";

interface StatsSectionProps {
  stats: ProfessionStats;
}

export function StatsSection({ stats }: StatsSectionProps) {
  const statItems = [
    { label: "Industry Adoption Rate", value: stats.adoptionRate },
    { label: "Average Time Saved", value: stats.timeSaved },
    { label: "ROI Increase", value: stats.roiIncrease },
  ];

  return (
    <section className="border-y border-brand-100 bg-white py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {statItems.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-brand-700">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-brand-400">{stat.label}</p>
            </div>
          ))}
        </div>
        {stats.source && (
          <p className="mt-6 text-center text-xs text-brand-300">
            Source: {stats.source}
          </p>
        )}
      </div>
    </section>
  );
}
