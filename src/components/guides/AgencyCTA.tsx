import { Button } from "@/components/shared/Button";

interface AgencyCTAProps {
  professionTitle: string;
}

export function AgencyCTA({ professionTitle }: AgencyCTAProps) {
  return (
    <section className="bg-brand-800 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">
          Want Us to Set It Up for You?
        </h2>
        <p className="mt-4 text-lg text-brand-200">
          Our team of AI workflow specialists can implement everything in the{" "}
          {professionTitle} guide for your organization. Done-for-you setup,
          training, and ongoing support.
        </p>
        <div className="mt-8">
          <Button href="/hire-us" variant="secondary" size="lg">
            Learn About Our Agency Services
          </Button>
        </div>
      </div>
    </section>
  );
}
