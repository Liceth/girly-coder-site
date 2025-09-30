"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostMeta } from "../../hooks/useBlogData";

// Format date for display
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

interface BlogCardProps {
  post: BlogPostMeta;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export function BlogCard({ post, variant = 'default', className = '' }: BlogCardProps) {
  const cardVariants = {
    default: "bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-kawaii hover:shadow-kawaii-hover",
    featured: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-kawaii hover:shadow-kawaii-hover border border-pink-200",
    compact: "bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md"
  };

  const titleSizes = {
    default: "text-xl",
    featured: "text-2xl",
    compact: "text-lg"
  };

  const excerptSizes = {
    default: "text-sm",
    featured: "text-base",
    compact: "text-xs"
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`${cardVariants[variant]} ${className} transition-all duration-300 cursor-pointer`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured Badge */}
        {post.featured && variant !== 'featured' && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-poppins font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className={`font-playfair font-semibold text-pink-700 mb-3 ${titleSizes[variant]} line-clamp-2`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`font-poppins text-rose-600 mb-4 ${excerptSizes[variant]} line-clamp-3`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, variant === 'compact' ? 2 : 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-poppins text-pink-500 bg-pink-50 px-2 py-1 rounded-full border border-pink-200"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > (variant === 'compact' ? 2 : 3) && (
            <span className="text-xs font-poppins text-gray-500">
              +{post.tags.length - (variant === 'compact' ? 2 : 3)} more
            </span>
          )}
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs font-poppins text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>📅</span>
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <span>⏱️</span>
              {post.readingTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-pink-500">
            <span>✍️</span>
            {post.author}
          </span>
        </div>

        {/* Read More Arrow */}
        <div className="mt-4 flex items-center justify-end">
          <motion.span
            className="text-pink-500 font-poppins text-sm flex items-center gap-1"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read more
            <span>→</span>
          </motion.span>
        </div>
      </Link>
    </motion.article>
  );
}
