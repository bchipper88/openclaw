import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
}

export async function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={{
        h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h2
            className="mt-10 text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
            {...props}
          />
        ),
        h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
          <h3
            className="mt-8 text-xl font-semibold"
            style={{ color: "var(--text-primary)" }}
            {...props}
          />
        ),
        p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            {...props}
          />
        ),
        ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
          <ul
            className="mt-4 list-disc space-y-2 pl-6"
            style={{ color: "var(--text-secondary)" }}
            {...props}
          />
        ),
        ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
          <ol
            className="mt-4 list-decimal space-y-2 pl-6"
            style={{ color: "var(--text-secondary)" }}
            {...props}
          />
        ),
        strong: (props: React.HTMLAttributes<HTMLElement>) => (
          <strong
            className="font-semibold"
            style={{ color: "var(--text-primary)" }}
            {...props}
          />
        ),
      }}
    />
  );
}
