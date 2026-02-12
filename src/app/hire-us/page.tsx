import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Hire Us - OpenClaw Setup Services",
  description:
    "Let our team deploy OpenClaw for you. Done-for-you setup, ClawHub skill installation, messaging integration, training, and ongoing support.",
};

const services = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Basic OpenClaw deployment for individuals or small teams",
    features: [
      "Basic OpenClaw deployment on your infrastructure",
      "5 ClawHub skills installed and configured",
      "1 messaging integration (WhatsApp, Telegram, Slack, or Discord)",
      "1-hour training session",
      "30 days of email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Full OpenClaw setup for growing teams and departments",
    features: [
      "Full OpenClaw setup with optimized configuration",
      "15+ ClawHub skills installed and configured",
      "Custom skill development for your workflow",
      "All messaging integrations (WhatsApp, Telegram, Slack, Discord, web)",
      "Team training session (up to 10 people)",
      "90 days of priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Multi-team deployment for organizations with complex needs",
    features: [
      "Multi-team OpenClaw deployment",
      "Custom integrations with internal tools and APIs",
      "Bespoke skill development and fine-tuning",
      "Organization-wide training program",
      "Dedicated account manager",
      "Ongoing support with SLA",
    ],
    popular: false,
  },
];

export default function HireUsPage() {
  return (
    <div className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Let Us Deploy OpenClaw for You
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Don&apos;t have time to DIY? Our team of OpenClaw specialists
            will deploy the open-source AI agent for your team, install the
            right ClawHub skills, set up messaging integrations, and provide
            hands-on training.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              padding="lg"
              className={
                service.popular
                  ? "relative shadow-lg"
                  : ""
              }
              {...(service.popular
                ? { style: { border: "2px solid var(--text-secondary)" } }
                : {})}
            >
              {service.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold"
                  style={{ backgroundColor: "var(--text-secondary)", color: "var(--bg-primary)" }}
                >
                  Most Popular
                </span>
              )}
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {service.name}
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {service.description}
              </p>
              <p
                className="mt-4 text-4xl font-extrabold"
                style={{ color: "var(--text-primary)" }}
              >
                {service.price}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="mt-0.5" style={{ color: "var(--text-secondary)" }}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="mailto:hello@openclaw.com?subject=OpenClaw Setup Services Inquiry"
                  variant={service.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
