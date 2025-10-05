import { MetadataRoute } from 'next';
import { getAllPosts } from './utils/blogUtils';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://licethovalles.com/blog';
  
  // Get all blog posts
  const posts = getAllPosts();
  
  // Blog post URLs
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];
  
  return [...staticPages, ...blogUrls];
}
