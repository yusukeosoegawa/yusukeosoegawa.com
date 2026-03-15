import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const postsDirectory = path.join(process.cwd(), "content", "writing");

interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  draft?: boolean;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: ReactNode;
}

function assertValidDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Invalid date format: ${date}. Use YYYY-MM-DD.`);
  }
}

function getPostFiles() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

function getSlugFromFilename(filename: string) {
  return filename.replace(/\.mdx$/, "");
}

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  return fs.readFileSync(fullPath, "utf8");
}

function parsePostMeta(filename: string): PostMeta | null {
  const slug = getSlugFromFilename(filename);
  const fileContents = readPostFile(slug);
  const { data } = matter(fileContents);
  const frontmatter = data as Frontmatter;

  if (!frontmatter.title || !frontmatter.date || !frontmatter.summary) {
    throw new Error(`Missing required frontmatter in ${filename}`);
  }

  assertValidDate(frontmatter.date);

  if (frontmatter.draft === true) {
    return null;
  }

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    summary: frontmatter.summary,
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostFiles()
    .map(parsePostMeta)
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getRecentPosts(limit = 5): PostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filename = `${slug}.mdx`;
  const files = getPostFiles();

  if (!files.includes(filename)) {
    return null;
  }

  const source = readPostFile(slug);
  const { content, data } = matter(source);
  const frontmatter = data as Frontmatter;

  if (frontmatter.draft === true) {
    return null;
  }

  if (!frontmatter.title || !frontmatter.date || !frontmatter.summary) {
    throw new Error(`Missing required frontmatter in ${filename}`);
  }

  assertValidDate(frontmatter.date);

  const { content: mdxContent } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    summary: frontmatter.summary,
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    content: mdxContent,
  };
}

export function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
