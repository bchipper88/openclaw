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
          className="text-sm font-medium transition-colors"
          style={{
            color: pathname.startsWith(item.href)
              ? "var(--text-primary)"
              : "var(--text-muted)",
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
