import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const FOOTER_LINKS = {
  Guides: [
    { href: "/guides", label: "All Guides" },
    { href: "/hire-us", label: "Hire Us" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {SITE_CONFIG.name}
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              OpenClaw setup guides for every profession.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {category}
              </h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-8 border-t pt-8 text-center text-sm"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-muted)",
          }}
        >
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
