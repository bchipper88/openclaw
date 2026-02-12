import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogContent } from "@/lib/mdx";
import { SITE_CONFIG } from "@/lib/constants";
import { MDXContent } from "@/components/guides/MDXContent";
import { JsonLd } from "@/components/shared/JsonLd";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogContent(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.frontmatter.title as string,
    description: post.frontmatter.excerpt as string,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogContent(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    datePublished: post.frontmatter.publishedAt,
    dateModified: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1
              className="text-4xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {post.frontmatter.title as string}
            </h1>
            <p
              className="mt-4 text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {post.frontmatter.excerpt as string}
            </p>
            <p
              className="mt-4 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Published{" "}
              {new Date(
                post.frontmatter.publishedAt as string
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>
          <div>
            <MDXContent source={post.content} />
          </div>
        </div>
      </article>
    </>
  );
}
