import Link from "next/link";
import { Navigation } from "./Navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "color-mix(in oklch, var(--bg-primary) 80%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {SITE_CONFIG.name}
        </Link>
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
