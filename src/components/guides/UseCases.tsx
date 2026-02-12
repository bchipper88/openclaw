import type { UseCase } from "@/types";

interface UseCasesProps {
  useCases: UseCase[];
}

export function UseCases({ useCases }: UseCasesProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-brand-900">
          AI Use Cases
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="rounded-xl border border-brand-100 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-brand-800">
                {useCase.title}
              </h3>
              <p className="mt-2 text-brand-500">{useCase.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {useCase.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded bg-brand-50 px-2 py-1 text-xs font-medium text-brand-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
