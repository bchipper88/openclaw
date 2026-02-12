import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Blog - AI Workflow Tips & Insights",
  description:
    "Practical AI automation tips, workflow guides, and industry insights for professionals.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  if (posts.length === 0) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-900">Blog</h1>
          <p className="mt-4 text-lg text-brand-500">
            Practical AI tips, workflow guides, and industry insights. Coming
            soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-900">Blog</h1>
        <p className="mt-4 text-lg text-brand-500">
          Practical AI tips, workflow guides, and industry insights.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition-all hover:shadow-md">
                <h2 className="text-xl font-bold text-brand-800">
                  {post.frontmatter.title as string}
                </h2>
                <p className="mt-2 text-sm text-brand-500">
                  {post.frontmatter.excerpt as string}
                </p>
                <p className="mt-4 text-xs text-brand-400">
                  {new Date(
                    post.frontmatter.publishedAt as string
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
