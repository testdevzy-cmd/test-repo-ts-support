import { blogPosts } from "../../../lib/blogData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-8 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{post.author}</span>
          </div>
          <span>•</span>
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div
        className="prose dark:prose-invert lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr className="my-12 border-gray-200 dark:border-gray-800" />

      <div className="flex justify-between items-center">
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Read more articles
        </Link>
      </div>
    </article>
  );
}
