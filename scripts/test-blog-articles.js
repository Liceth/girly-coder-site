#!/usr/bin/env node

/**
 * Blog Articles Test Script
 * Verifies that blog articles can be accessed and display content
 */

const fs = require('fs');
const path = require('path');

console.log('📝 Testing blog articles functionality...\n');

// Check if content directory exists
const contentDir = path.join(process.cwd(), 'src/content/blog');
if (!fs.existsSync(contentDir)) {
  console.log('❌ Content directory not found at: src/content/blog/');
  process.exit(1);
}

// List MDX files
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
console.log(`📚 Found ${files.length} blog articles:`);

files.forEach((file, index) => {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/);
    const slug = file.replace('.mdx', '');
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    console.log(`   ${index + 1}. ${title}`);
    console.log(`      📄 File: ${file}`);
    console.log(`      🔗 URL: /blog/${slug}`);
    console.log(`      📊 Content length: ${content.length} characters`);
    console.log('');
  }
});

// Check API route
console.log('🔌 Checking API route:');
const apiRoute = path.join(process.cwd(), 'src/app/api/blog/route.ts');
if (fs.existsSync(apiRoute)) {
  console.log('✅ API route exists');
  
  // Check if it can read the content
  try {
    const content = fs.readFileSync(apiRoute, 'utf8');
    if (content.includes('src/content/blog')) {
      console.log('✅ API route uses correct content path');
    } else {
      console.log('❌ API route using incorrect content path');
    }
  } catch (error) {
    console.log('❌ Error reading API route:', error.message);
  }
} else {
  console.log('❌ API route not found');
}

// Check blog post page
console.log('\n📄 Checking blog post page:');
const blogPage = path.join(process.cwd(), 'src/app/blog/[slug]/page.tsx');
if (fs.existsSync(blogPage)) {
  console.log('✅ Blog post page exists');
} else {
  console.log('❌ Blog post page not found');
}

// Check required components
console.log('\n🧩 Checking required components:');
const components = [
  'src/app/components/blog/ServerMDXContent.tsx',
  'src/app/components/blog/AnimatedBlogContent.tsx',
  'src/app/components/blog/BlogPostHeader.tsx',
  'src/app/components/blog/RelatedPosts.tsx',
  'src/app/utils/dateUtils.ts'
];

components.forEach(component => {
  const componentPath = path.join(process.cwd(), component);
  if (fs.existsSync(componentPath)) {
    console.log(`✅ ${component}`);
  } else {
    console.log(`❌ ${component} - MISSING`);
  }
});

console.log('\n🎯 Blog articles test complete!');
console.log('\n📋 How to test manually:');
console.log('1. Start the development server: npm run dev');
console.log('2. Visit: http://localhost:3000/blog');
console.log('3. Click on any article');
console.log('4. Verify the article content displays correctly');
console.log('5. Check that code blocks have syntax highlighting');
console.log('6. Verify related articles appear at the bottom');

console.log('\n🔗 Test URLs:');
files.forEach(file => {
  const slug = file.replace('.mdx', '');
  console.log(`   - http://localhost:3000/blog/${slug}`);
});
