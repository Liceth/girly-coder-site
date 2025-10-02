import { notFound } from 'next/navigation';

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
    // Get posts directly from file system
    const fs = await import('fs');
    const path = await import('path');
    
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        return { slug };
      });
    
    return posts;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    
    // Read post directly from file system during build
    const fs = await import('fs');
    const path = await import('path');
    const matter = await import('gray-matter');
    
    const fullPath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter.default(fileContents);

    return {
      title: `${data.title} | Liceth Ovalles`,
      description: data.excerpt,
      openGraph: {
        title: data.title,
        description: data.excerpt,
        type: 'article',
        publishedTime: data.date,
        authors: [data.author],
        tags: data.tags || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description: data.excerpt,
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
    
    // Read post directly from file system during build
    const fs = await import('fs');
    const path = await import('path');
    const matter = await import('gray-matter');
    
    const fullPath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter.default(fileContents);
    
    const post = {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tags: data.tags || [],
      author: data.author,
      featured: data.featured || false,
      readingTime: data.readingTime || '5 min read',
      content,
    };
    
    if (!post) {
      notFound();
    }

    // Get related posts by reading all posts and finding related ones
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((name) => name.endsWith('.mdx') && name !== `${slug}.mdx`)
      .map((fileName) => {
        const postSlug = fileName.replace(/\.mdx$/, '');
        const postPath = path.join(postsDirectory, fileName);
        const postContent = fs.readFileSync(postPath, 'utf8');
        const { data: postData } = matter.default(postContent);
        
        return {
          slug: postSlug,
          title: postData.title,
          excerpt: postData.excerpt,
          date: postData.date,
          tags: postData.tags || [],
          author: postData.author,
          featured: postData.featured || false,
          readingTime: postData.readingTime || '5 min read',
        };
      });
    
    // Find related posts based on common tags
    const relatedPosts = allPosts
      .map((relatedPost) => {
        const commonTags = relatedPost.tags.filter((tag: string) => 
          post.tags.includes(tag)
        );
        return {
          ...relatedPost,
          commonTagsCount: commonTags.length,
        };
      })
      .filter((relatedPost) => relatedPost.commonTagsCount > 0)
      .sort((a, b) => b.commonTagsCount - a.commonTagsCount)
      .slice(0, 3)
      .map(({ commonTagsCount, ...relatedPost }) => relatedPost);

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
