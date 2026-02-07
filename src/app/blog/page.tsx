import { blogPosts } from "../../lib/blogData";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            &larr; Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          Insights, tutorials, and thoughts on software development, AI, and the
          future of tech.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </main>

      <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Test Repo TS Support from Antigravity.
        All rights reserved.
      </footer>
    </div>
  );
}
