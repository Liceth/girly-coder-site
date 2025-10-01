"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogPostMeta } from "../../hooks/useBlogData";

interface BlogTagFilterProps {
  posts: BlogPostMeta[];
  onFilteredPosts: (posts: BlogPostMeta[]) => void;
  className?: string;
}

export function BlogTagFilter({ posts, onFilteredPosts, className = '' }: Readonly<BlogTagFilterProps>) {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort();

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    
    if (tag === 'all') {
      onFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter(post => 
        post.tags.some(postTag => 
          postTag.toLowerCase() === tag.toLowerCase()
        )
      );
      onFilteredPosts(filteredPosts);
    }
  };

  return (
    <div className={`${className}`}>
      {/* Filter Label */}
      <div className="mb-4">
        <h3 className="text-sm font-poppins font-medium text-pink-700 mb-2">
          Filter by topic:
        </h3>
      </div>

      {/* Tag Buttons */}
      <div className="flex flex-wrap gap-2">
        {/* All Posts Button */}
        <motion.button
          onClick={() => handleTagClick('all')}
          className={`px-4 py-2 rounded-full text-sm font-poppins font-medium transition-all duration-300 ${
            selectedTag === 'all'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
              : 'bg-white/80 text-pink-600 border border-pink-200 hover:bg-pink-50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Posts
        </motion.button>

        {/* Tag Buttons */}
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 rounded-full text-sm font-poppins font-medium transition-all duration-300 ${
              selectedTag === tag
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/80 text-pink-600 border border-pink-200 hover:bg-pink-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Selected Filter Indicator */}
      {selectedTag !== 'all' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-xs font-poppins text-pink-600 flex items-center gap-2"
        >
          <span>🏷️</span>
          Showing posts tagged with: <span className="font-semibold">{selectedTag}</span>
        </motion.div>
      )}
    </div>
  );
}
