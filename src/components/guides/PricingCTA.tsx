"use client";

import { useState } from "react";
import type { Profession } from "@/types";
import { formatPrice } from "@/lib/professions";

interface PricingCTAProps {
  profession: Profession;
}

export function PricingCTA({ profession }: PricingCTAProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          professionSlug: profession.slug,
          stripePriceId: profession.stripePriceId,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Get the Complete Guide
        </h2>
        <p
          className="mt-4 text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Everything you need to set up AI workflows for your role as a{" "}
          {profession.title.toLowerCase().replace(/s$/, "")}.
        </p>
        <div
          className="mt-8 rounded-2xl border-2 p-8 shadow-lg"
          style={{
            borderColor: "var(--border-hover)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <p
            className="text-5xl font-extrabold"
            style={{ color: "var(--text-primary)" }}
          >
            {formatPrice(profession.guidePrice)}
          </p>
          <p className="mt-2" style={{ color: "var(--text-muted)" }}>
            One-time payment, instant access
          </p>
          <ul
            className="mt-6 space-y-3 text-left"
            style={{ color: "var(--text-secondary)" }}
          >
            <li className="flex items-center gap-2">
              <CheckIcon /> Step-by-step setup instructions
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon /> Copy-paste prompt templates
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon /> Automation workflow diagrams
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon /> Tool configuration guides
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon /> Free updates for 12 months
            </li>
          </ul>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-8 w-full rounded-lg bg-brand-600 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-700 disabled:opacity-50"
          >
            {loading
              ? "Redirecting to checkout..."
              : `Buy Now - ${formatPrice(profession.guidePrice)}`}
          </button>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
            Secure checkout powered by Stripe. Instant PDF download after
            payment.
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-accent-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
