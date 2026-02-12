import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GUIDES_DIR = path.join(process.cwd(), "src/content/guides");
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface MDXContent {
  content: string;
  frontmatter: Record<string, unknown>;
}

export function getGuideContent(slug: string): MDXContent | null {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { content, frontmatter: data };
}

export function getBlogContent(slug: string): MDXContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { content, frontmatter: data };
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllBlogPosts(): Array<{
  slug: string;
  frontmatter: Record<string, unknown>;
}> {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => {
      const content = getBlogContent(slug);
      if (!content) return null;
      return { slug, frontmatter: content.frontmatter };
    })
    .filter(Boolean) as Array<{
    slug: string;
    frontmatter: Record<string, unknown>;
  }>;
}
