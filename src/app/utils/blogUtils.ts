import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
  featured: boolean;
  readingTime: string;
  content: string;
}

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

// Get all blog posts
export function getAllPosts(): BlogPostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        tags: data.tags || [],
        author: data.author,
        featured: data.featured || false,
        readingTime: data.readingTime || '5 min read',
      } as BlogPostMeta;
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get featured posts
export function getFeaturedPosts(): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => 
    post.tags.some((postTag) => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

// Get all unique tags
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags)).sort();
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags || [],
      author: data.author,
      featured: data.featured || false,
      readingTime: data.readingTime || '5 min read',
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get related posts (by tags)
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const commonTags = post.tags.filter((tag) => 
        currentPost.tags.includes(tag)
      );
      return {
        ...post,
        commonTagsCount: commonTags.length,
      };
    })
    .filter((post) => post.commonTagsCount > 0)
    .sort((a, b) => b.commonTagsCount - a.commonTagsCount)
    .slice(0, limit);

  return relatedPosts.map(({  ...post }) => post);
}

// Re-export utility functions from dateUtils
export { formatDate, estimateReadingTime } from './dateUtils';

// Search posts by title and content
export function searchPosts(query: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();

  return allPosts.filter((post) => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
