import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OpenClaw",
  description:
    "Learn about OpenClaw and our mission to make AI workflows accessible to every profession.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-900">About OpenClaw</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-brand-600">
          <p>
            OpenClaw was founded with a simple belief: every professional
            deserves access to AI workflows that actually work for their specific
            role.
          </p>
          <p>
            We noticed a gap between generic AI tutorials and what professionals
            actually need. A real estate agent doesn&apos;t need to understand
            prompt engineering theory &mdash; they need a copy-paste prompt that
            generates listing descriptions in 60 seconds.
          </p>
          <p>
            That&apos;s why we build profession-specific AI workflow guides. Each
            guide is researched, tested, and refined for a specific role, with
            real prompts, real automations, and real results.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-brand-900">Our Team</h2>
          <p>
            We&apos;re a team of AI practitioners, automation engineers, and
            industry specialists who have built AI workflows for organizations
            ranging from solo practitioners to Fortune 500 companies.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-brand-900">Contact</h2>
          <p>
            Have questions? Reach out at{" "}
            <a
              href="mailto:hello@openclaw.com"
              className="font-semibold text-brand-700 underline"
            >
              hello@openclaw.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
