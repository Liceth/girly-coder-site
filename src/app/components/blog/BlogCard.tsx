"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostMeta } from "../../hooks/useBlogData";
import { formatDate } from "@/app/utils/dateUtils";

interface BlogCardProps {
  post: BlogPostMeta;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function BlogCard({
  post,
  variant = "default",
  className = "",
}: Readonly<BlogCardProps>) {
  const isFeatured = variant === "featured";
  const isCompact  = variant === "compact";
  const tagLimit   = isCompact ? 2 : 3;

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`group relative bg-[#fdfbf8] border border-[#e8e0d6] rounded-xl overflow-hidden
        shadow-kawaii hover:shadow-kawaii-hover transition-shadow duration-300
        ${isFeatured ? "p-8" : isCompact ? "p-4" : "p-6"}
        ${className}`}
    >
      {/* Featured: dusty rose top bar */}
      {isFeatured && (
        <div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#c8869a] to-[#e8c4d0]"
          aria-hidden="true"
        />
      )}

      <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8869a] rounded-lg">

        {/* Featured label */}
        {post.featured && !isFeatured && (
          <p className="text-[10px] uppercase tracking-[0.16em] font-poppins text-[#c8869a] mb-3">
            Featured
          </p>
        )}

        {/* Title */}
        <h3
          className={`font-playfair font-semibold text-[#2d2420] leading-snug mb-3 line-clamp-2
            group-hover:text-[#8f5a6e] transition-colors duration-200
            ${isFeatured ? "text-2xl" : isCompact ? "text-base" : "text-xl"}`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`font-poppins font-light text-[#5c4a42] leading-relaxed mb-5 line-clamp-3
            ${isFeatured ? "text-base" : "text-sm"}`}
        >
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.slice(0, tagLimit).map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[10px] font-poppins font-medium tracking-wide
                  bg-[#f7eff2] text-[#8f5a6e] border border-[#e8d0d8]"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > tagLimit && (
              <span className="text-[10px] font-poppins text-[#c4b5a2] self-center">
                +{post.tags.length - tagLimit}
              </span>
            )}
          </div>
        )}

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-poppins text-[#c4b5a2]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Arrow — animates right on hover */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#c4b5a2] group-hover:text-[#c8869a] group-hover:translate-x-1 transition-all duration-200"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
}
