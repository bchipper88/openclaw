"use client";

import { useState } from "react";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  faq: FAQItem[];
}

export function FAQSection({ faq }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Frequently Asked Questions
        </h2>
        <div
          className="mt-12 divide-y"
          style={{ borderColor: "var(--border-color)" }}
        >
          {faq.map((item, index) => (
            <div
              key={index}
              className="py-6"
              style={{ borderColor: "var(--border-color)" }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left"
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.question}
                </h3>
                <span className="ml-4" style={{ color: "var(--text-muted)" }}>
                  {openIndex === index ? "\u2212" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4" style={{ color: "var(--text-secondary)" }}>{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
