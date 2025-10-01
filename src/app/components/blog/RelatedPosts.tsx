"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostMeta } from "../../hooks/useBlogData";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export function RelatedPosts({ posts }: Readonly<RelatedPostsProps>) {
  if (posts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-playfair font-semibold text-pink-700 mb-8 text-center">
        Related Articles 📚
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-kawaii hover:shadow-kawaii-hover transition-all duration-300 border border-pink-100"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              {/* Featured Badge */}
              {post.featured && (
                <div className="mb-3">
                  <span className="text-xs font-poppins font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-lg font-playfair font-semibold text-pink-700 mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm font-poppins text-rose-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-poppins text-pink-500 bg-pink-50 px-2 py-1 rounded-full border border-pink-200"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 2 && (
                  <span className="text-xs font-poppins text-gray-500">
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs font-poppins text-gray-500">
                <span className="flex items-center gap-1">
                  <span>⏱️</span>
                  {post.readingTime}
                </span>
                <span className="text-pink-500">Read more </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
