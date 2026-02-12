import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OpenClaw",
  description:
    "Learn about OpenClaw and our mission to make autonomous AI accessible to every profession through the open-source AI agent.",
};

export default function AboutPage() {
  return (
    <div className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          About OpenClaw
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>
            We help professionals deploy OpenClaw, the massive open-source AI
            agent with 165,000+ GitHub stars. OpenClaw is free, MIT-licensed,
            and runs locally on your own infrastructure &mdash; so your data
            never leaves your control.
          </p>
          <p>
            OpenClaw works with Claude, GPT, Gemini, DeepSeek, and local
            models. It&apos;s accessible via WhatsApp, Telegram, Slack,
            Discord, web, and API. With the ClawHub marketplace offering
            5,700+ community-built skills, OpenClaw can read and write files,
            run scripts, control browsers, call APIs, and operate
            autonomously 24/7 with persistent memory.
          </p>
          <p>
            We noticed that most professionals don&apos;t need to understand
            AI architecture &mdash; they need a clear, step-by-step guide to
            deploy OpenClaw for their specific role. That&apos;s why we build
            profession-specific setup guides that get you running in hours,
            not weeks.
          </p>
          <h2
            className="mt-12 text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Our Mission
          </h2>
          <p>
            Making autonomous AI accessible to every profession. We believe
            the future of work is powered by open-source AI agents that
            anyone can deploy, customize, and extend &mdash; without vendor
            lock-in, subscription fees, or giving up data privacy.
          </p>
          <h2
            className="mt-12 text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Our Team
          </h2>
          <p>
            We&apos;re a team of AI practitioners, open-source contributors,
            and automation engineers who have deployed OpenClaw for
            organizations ranging from solo practitioners to Fortune 500
            companies.
          </p>
          <h2
            className="mt-12 text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Contact
          </h2>
          <p>
            Have questions? Reach out at{" "}
            <a
              href="mailto:hello@openclaw.com"
              className="font-semibold underline"
              style={{ color: "var(--text-primary)" }}
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
