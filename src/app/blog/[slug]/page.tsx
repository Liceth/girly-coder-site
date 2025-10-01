import { notFound } from 'next/navigation';

import {  BlogPostMeta } from '../../hooks/useBlogData';
import { ServerMDXContent } from '@/app/components/blog/ServerMDXContent';
import { AnimatedBlogContent } from '@/app/components/blog/AnimatedBlogContent';
import { BlogPostHeader } from '@/app/components/blog/BlogPostHeader';
import { RelatedPosts } from '@/app/components/blog/RelatedPosts';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog?action=all`, {
      cache: 'force-cache'
    });
    const data = await response.json();
    return data.posts.map((post: BlogPostMeta) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog?action=single&slug=${slug}`, {
      cache: 'force-cache'
    });
    
    if (!response.ok) {
      return {
        title: 'Post Not Found',
      };
    }
    
    const data = await response.json();
    const post = data.post;

    return {
      title: `${post.title} | Liceth Ovalles`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog?action=single&slug=${slug}`, {
      cache: 'force-cache'
    });
    
    if (!response.ok) {
      notFound();
    }
    
    const data = await response.json();
    const post = data.post;
    
    if (!post) {
      notFound();
    }

    // Fetch related posts
    const relatedResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog?action=related&slug=${slug}`, {
      cache: 'force-cache'
    });
    const relatedData = await relatedResponse.json();
    const relatedPosts = relatedData.posts || [];

    return (
      <article className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-100 to-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Blog Post Header */}
          <BlogPostHeader post={post} />
          
          {/* Blog Post Content */}
          <AnimatedBlogContent>
            <ServerMDXContent content={post.content} />
          </AnimatedBlogContent>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <RelatedPosts posts={relatedPosts} />
          )}
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}
