import Link from "next/link";
import { Navigation } from "./Navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-brand-700">
          {SITE_CONFIG.name}
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
