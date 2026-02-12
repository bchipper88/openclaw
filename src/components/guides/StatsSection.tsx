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
    <section
      className="border-y py-12"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--bg-card)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {statItems.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-3xl font-extrabold"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
        {stats.source && (
          <p className="mt-6 text-center text-xs" style={{ color: "var(--text-muted)" }}>
            Source: {stats.source}
          </p>
        )}
      </div>
    </section>
  );
}
