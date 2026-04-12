"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import { BlogCard } from "../blog/BlogCard";

import { useBlogData,  BlogPostMeta } from "../../hooks/useBlogData";

export function Blogs() {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPostMeta[]>([]);
  
  const { allPosts, featuredPosts, isLoading, error } = useBlogData();

  // Update displayed posts when data changes
  useEffect(() => {
    if (allPosts.length > 0 && displayedPosts.length === 0) {
      setDisplayedPosts(allPosts);
    }
  }, [allPosts, displayedPosts.length]);


  if (error) {
    return (
      <section id="blog" className="py-28 px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.22em] uppercase text-[#c8869a] mb-3 font-poppins">Writing</p>
        <h2 className="text-4xl font-playfair font-semibold text-[#2d2420] mb-12">Blog</h2>
        <p className="font-poppins text-sm text-[#5c4a42]">Could not load posts: {error}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="blog" className="py-28 px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.22em] uppercase text-[#c8869a] mb-3 font-poppins">Writing</p>
        <h2 className="text-4xl font-playfair font-semibold text-[#2d2420] mb-12">Blog</h2>
        <div className="flex justify-center py-20">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
            aria-label="Loading"
          >
            🌸
          </motion.span>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-28 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <AnimatedText
        type="fade"
        delay={0.1}
        className="text-xs tracking-[0.22em] uppercase text-[#c8869a] mb-3 font-poppins"
      >
        Writing
      </AnimatedText>
      <AnimatedText
        type="slide"
        delay={0.15}
        className="text-4xl font-playfair font-semibold text-[#2d2420] mb-3"
      >
        Blog
      </AnimatedText>
      <AnimatedText
        type="slide"
        delay={0.2}
        className="font-poppins font-light text-[#5c4a42] text-base mb-12 max-w-md leading-relaxed"
      >
        Thoughts on frontend engineering, accessibility, and building for the web.
      </AnimatedText>
      <hr className="border-[#e8e0d6] mb-16" />
   

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <BlogCard post={post} variant="featured" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* All Posts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.08 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {displayedPosts.length === 0 && !isLoading && (
        <p className="font-poppins text-sm text-[#5c4a42] text-center py-12">
          No articles yet — check back soon.
        </p>
      )}
    </section>
  );
}
