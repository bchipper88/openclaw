"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/guides", label: "All Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/hire-us", label: "Hire Us" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-brand-600 ${
            pathname.startsWith(item.href)
              ? "text-brand-700"
              : "text-brand-500"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
