export const SITE_CONFIG = {
  name: "OpenClaw",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://openclaw.com",
  description:
    "Step-by-step OpenClaw setup guides for every profession. Learn how to deploy the open-source AI agent for your industry with skills, automations, and workflows.",
  ogImage: "/images/og/default.png",
} as const;

export const PRICE_DISPLAY = {
  currency: "USD",
  locale: "en-US",
} as const;
