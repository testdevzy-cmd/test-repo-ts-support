import Link from "next/link";
import { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {post.publishedAt}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {post.readTime}
        </span>
      </div>
      <Link href={`/blog/${post.slug}`} className="block group">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {post.author}
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
