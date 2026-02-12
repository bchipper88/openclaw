export const SITE_CONFIG = {
  name: "OpenClaw",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://openclaw.com",
  description:
    "AI workflow and automation setup guides for every profession. Get step-by-step instructions, prompts, and templates.",
  ogImage: "/images/og/default.png",
} as const;

export const PRICE_DISPLAY = {
  currency: "USD",
  locale: "en-US",
} as const;
