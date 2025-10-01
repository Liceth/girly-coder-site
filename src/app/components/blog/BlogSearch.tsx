"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPostMeta } from "../../hooks/useBlogData";

interface BlogSearchProps {
  posts: BlogPostMeta[];
  onSearchResults: (results: BlogPostMeta[]) => void;
  className?: string;
}

export function BlogSearch({ posts, onSearchResults, className = '' }: Readonly<BlogSearchProps>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }
    // Client-side search fallback
    const lowercaseQuery = searchQuery.toLowerCase();
    return posts.filter((post) => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  }, [searchQuery, posts]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      onSearchResults(searchResults);
      setIsSearching(false);
    }, 300);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearchResults(posts);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <motion.span
            animate={{ rotate: isSearching ? 360 : 0 }}
            transition={{ duration: 1, repeat: isSearching ? Infinity : 0 }}
            className="text-pink-400"
          >
            🔍
          </motion.span>
        </div>
        
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 font-poppins bg-white/80 backdrop-blur-sm"
        />
        
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-pink-400 hover:text-pink-600 transition-colors duration-200"
          >
            <span>✕</span>
          </button>
        )}
      </div>

      {/* Search Results Count */}
      <AnimatePresence>
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm font-poppins text-pink-600"
          >
            {isSearching ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-xs"
                >
                  ⏳
                </motion.span>
                Searching...
              </span>
            ) : (
              <span>
                {searchResults.length} article{searchResults.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
