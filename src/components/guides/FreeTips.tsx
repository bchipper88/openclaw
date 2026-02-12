import type { FreeTip } from "@/types";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";

interface FreeTipsProps {
  tips: FreeTip[];
  professionTitle: string;
  tipsPageHref: string;
}

export function FreeTips({
  tips,
  professionTitle,
  tipsPageHref,
}: FreeTipsProps) {
  return (
    <section className="bg-brand-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-brand-900">
          Free AI Tips for {professionTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-brand-500">
          Start implementing AI today with these actionable tips. Want the
          complete playbook? Get the full guide below.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tips.map((tip, index) => (
            <Card key={index} className="flex flex-col">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-lg font-bold text-brand-600">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-brand-800">
                {tip.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-brand-500">
                {tip.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href={tipsPageHref} variant="outline">
            Read All Tips
          </Button>
        </div>
      </div>
    </section>
  );
}
