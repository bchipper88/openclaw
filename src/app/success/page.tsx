import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Purchase Successful",
  robots: { index: false, follow: false },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; profession?: string }>;
}) {
  const { profession } = await searchParams;

  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="mx-auto max-w-lg px-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-500">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-brand-900">
          Thank You for Your Purchase!
        </h1>
        <p className="mt-4 text-lg text-brand-500">
          Your AI workflow guide is ready. Check your email for the download
          link, or download it directly below.
        </p>
        <div className="mt-8 space-y-4">
          <Button href="#" size="lg" className="w-full">
            Download Your Guide (PDF)
          </Button>
          {profession && (
            <Button
              href={`/guides/${profession}`}
              variant="outline"
              className="w-full"
            >
              Back to Guide Page
            </Button>
          )}
        </div>
        <p className="mt-6 text-sm text-brand-400">
          Need help? Contact us at support@openclaw.com
        </p>
      </div>
    </div>
  );
}
