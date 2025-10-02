"use client";

import { useState, useEffect } from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
  featured: boolean;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// Custom hook for fetching blog data
export function useBlogData() {
  const [allPosts, setAllPosts] = useState<BlogPostMeta[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPostMeta[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all posts and featured posts in parallel
        const [allResponse, featuredResponse] = await Promise.all([
          fetch('/api/blog?action=all'),
          fetch('/api/blog?action=featured')
        ]);

        if (!allResponse.ok || !featuredResponse.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const allData = await allResponse.json();
        const featuredData = await featuredResponse.json();

        setAllPosts(allData.posts || []);
        setFeaturedPosts(featuredData.posts || []);
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blog data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return {
    allPosts,
    featuredPosts,
    isLoading,
    error
  };
}

// Hook for fetching a single blog post
export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostMeta[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch post and related posts in parallel
        const [postResponse, relatedResponse] = await Promise.all([
          fetch(`/api/blog?action=single&slug=${slug}`),
          fetch(`/api/blog?action=related&slug=${slug}`)
        ]);

        if (!postResponse.ok) {
          if (postResponse.status === 404) {
            throw new Error('Post not found');
          }
          throw new Error('Failed to fetch post');
        }

        const postData = await postResponse.json();
        const relatedData = await relatedResponse.json();

        setPost(postData.post);
        setRelatedPosts(relatedData.posts || []);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return {
    post,
    relatedPosts,
    isLoading,
    error
  };
}

