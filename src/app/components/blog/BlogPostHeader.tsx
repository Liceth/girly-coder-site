"use client";

import { motion } from "framer-motion";
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

interface BlogPostHeaderProps {
  post: BlogPostMeta;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-poppins text-sm transition-colors duration-200"
        >
          <span>←</span>
          Back to articles
        </button>
      </motion.div>

      {/* Featured Badge */}
      {post.featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-poppins font-medium border border-pink-200">
            <span>⭐</span>
            Featured Article
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-5xl font-playfair font-bold text-pink-700 mb-6 leading-tight"
      >
        {post.title}
      </motion.h1>

      {/* Excerpt */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-poppins text-rose-600 mb-8 leading-relaxed"
      >
        {post.excerpt}
      </motion.p>

      {/* Meta Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap items-center gap-6 text-sm font-poppins text-gray-600 mb-8"
      >
        <div className="flex items-center gap-2">
          <span>✍️</span>
          <span className="font-medium">{post.author}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{formatDate(post.date)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span>⏱️</span>
          <span>{post.readingTime}</span>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-2"
      >
        {post.tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="px-3 py-1 bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 rounded-full text-sm font-poppins font-medium border border-pink-200 hover:bg-pink-100 transition-colors duration-200 cursor-pointer"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.header>
  );
}
