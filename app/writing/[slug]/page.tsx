import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { formatDisplayDate, getAllPostSlugs, getPostBySlug } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/writing/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      url: `/writing/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="stack-lg">
      <header className="stack-sm">
        <h1>{post.title}</h1>
        <p className="post-meta">
          <time dateTime={post.date}>{formatDisplayDate(post.date)}</time>
          {post.tags.length > 0 ? (
            <span aria-label="tags"> · {post.tags.join(" · ")}</span>
          ) : null}
        </p>
      </header>

      <Prose>{post.content}</Prose>
    </article>
  );
}
