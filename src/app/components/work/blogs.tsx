"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import { BlogCard } from "../blog/BlogCard";

import { useBlogData,  BlogPostMeta } from "../../hooks/useBlogData";

export function Blogs() {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPostMeta[]>([]);
  
  const { allPosts, featuredPosts, isLoading } = useBlogData();

  // Update displayed posts when data changes
  useEffect(() => {
    if (allPosts.length > 0 && displayedPosts.length === 0) {
      setDisplayedPosts(allPosts);
    }
  }, [allPosts, displayedPosts.length]);


  if (isLoading) {
    return (
      <section id="blog" className="py-5 px-6 max-w-7xl mx-auto">
        <AnimatedText 
          type="fade" 
          delay={0.2}
          className="text-4xl font-playfair font-semibold text-center mb-4"
        >
          <span className="gradient-text">Blog</span> 📝
        </AnimatedText>
        
        <div className="flex justify-center items-center py-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-4xl"
          >
            🌸
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-5 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <AnimatedText 
        type="fade" 
        delay={0.2}
        className="text-4xl font-playfair font-semibold text-center mb-4"
      >
        <span className="gradient-text">Blog</span> 
      </AnimatedText>
   

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
       
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <BlogCard post={post} variant="featured" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mb-8 space-y-6"
      >
        {/* TODO: add search and filter */}
        
      </motion.div>

      {/* All Posts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {displayedPosts.length === 0 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-playfair font-semibold text-pink-700 mb-2">
            No articles found
          </h3>
          <p className="text-rose-600 font-poppins">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="mt-16 text-center"
      >
      </motion.div>
    </section>
  );
}
