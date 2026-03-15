import Link from "next/link";
import { formatDisplayDate, type PostMeta } from "@/lib/posts";

interface PostListProps {
  posts: PostMeta[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="muted">No published posts yet.</p>;
  }

  return (
    <ol className="post-list">
      {posts.map((post) => (
        <li key={post.slug} className="post-item">
          <article className="stack-sm">
            <div className="stack-sm">
              <h2>
                <Link href={`/writing/${post.slug}`} className="post-title">
                  {post.title}
                </Link>
              </h2>
              <p className="post-meta">
                <time dateTime={post.date}>{formatDisplayDate(post.date)}</time>
              </p>
            </div>

            <p className="post-summary">{post.summary}</p>

            {post.tags.length > 0 ? (
              <ul className="tag-list" aria-label="tags">
                {post.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
