import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Hire Us - AI Workflow Setup Services",
  description:
    "Let our team of AI specialists set up your automation workflows. Done-for-you implementation, training, and ongoing support.",
};

const services = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for individuals or small teams",
    features: [
      "1 core AI workflow setup",
      "ChatGPT/Claude configuration",
      "2 automation integrations",
      "1-hour training session",
      "30 days of email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Best for growing teams and departments",
    features: [
      "3 custom AI workflows",
      "Full tool stack configuration",
      "5 automation integrations",
      "Team training session (up to 10 people)",
      "90 days of priority support",
      "Custom prompt library",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with complex needs",
    features: [
      "Unlimited workflow design",
      "Enterprise tool integration",
      "Custom AI model fine-tuning",
      "Organization-wide training",
      "Dedicated account manager",
      "SLA-backed support",
    ],
    popular: false,
  },
];

export default function HireUsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-900">
            Let Us Set Up Your AI Workflows
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-500">
            Don&apos;t have time to DIY? Our team of AI workflow specialists
            will implement everything for you. Hands-off setup, thorough
            training, and ongoing support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              padding="lg"
              className={
                service.popular
                  ? "relative border-2 border-brand-600 shadow-lg"
                  : ""
              }
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-brand-800">
                {service.name}
              </h3>
              <p className="mt-1 text-sm text-brand-500">
                {service.description}
              </p>
              <p className="mt-4 text-4xl font-extrabold text-brand-900">
                {service.price}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-brand-600"
                  >
                    <span className="mt-0.5 text-accent-500">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="mailto:hello@openclaw.com?subject=Agency Services Inquiry"
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
