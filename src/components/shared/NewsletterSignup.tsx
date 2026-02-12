"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service (ConvertKit, Mailchimp, Resend, etc.)
    console.log("Newsletter signup:", email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h3
          className="text-2xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          You&apos;re In!
        </h3>
        <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
          Check your email for a confirmation link.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3
        className="text-2xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Get Free AI Workflow Tips
      </h3>
      <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
        Weekly tips on implementing AI in your profession. No spam, unsubscribe
        anytime.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 flex max-w-md gap-3"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500"
          style={{
            color: "var(--text-primary)",
            backgroundColor: "var(--bg-card)",
          }}
        />
        <button
          type="submit"
          className="rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
