#!/usr/bin/env node

/**
 * Security Check Script
 * Verifies that content files are not publicly accessible
 */

const fs = require('fs');
const path = require('path');

console.log('🔒 Checking deployment security...\n');

// Check if content directory exists in the right place
const contentDir = path.join(process.cwd(), 'src/content/blog');
const oldContentDir = path.join(process.cwd(), 'content/blog');

console.log('📁 Checking content directory location:');
if (fs.existsSync(contentDir)) {
  console.log('✅ Content directory found at: src/content/blog/');
  
  // List MDX files
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  console.log(`📝 Found ${files.length} MDX files:`);
  files.forEach(file => console.log(`   - ${file}`));
} else {
  console.log('❌ Content directory not found at: src/content/blog/');
}

if (fs.existsSync(oldContentDir)) {
  console.log('⚠️  Old content directory still exists at: content/blog/');
  console.log('   This should be removed to prevent public access.');
} else {
  console.log('✅ Old content directory properly removed');
}

// Check Next.js config
console.log('\n⚙️  Checking Next.js configuration:');
const configPath = path.join(process.cwd(), 'next.config.ts');
if (fs.existsSync(configPath)) {
  const config = fs.readFileSync(configPath, 'utf8');
  
  if (config.includes('/content/:path*')) {
    console.log('✅ Redirects configured for /content/');
  } else {
    console.log('❌ Missing redirects for /content/');
  }
  
  if (config.includes('/src/content/:path*')) {
    console.log('✅ Redirects configured for /src/content/');
  } else {
    console.log('❌ Missing redirects for /src/content/');
  }
  
  if (config.includes('X-Robots-Tag')) {
    console.log('✅ Security headers configured');
  } else {
    console.log('❌ Missing security headers');
  }
} else {
  console.log('❌ next.config.ts not found');
}

// Check deployment ignore files
console.log('\n📋 Checking deployment ignore files:');

const vercelIgnore = path.join(process.cwd(), '.vercelignore');
if (fs.existsSync(vercelIgnore)) {
  const content = fs.readFileSync(vercelIgnore, 'utf8');
  if (content.includes('content/')) {
    console.log('✅ .vercelignore includes content/');
  } else {
    console.log('❌ .vercelignore missing content/');
  }
} else {
  console.log('⚠️  .vercelignore not found (only needed for Vercel)');
}

const netlifyRedirects = path.join(process.cwd(), 'public/_redirects');
if (fs.existsSync(netlifyRedirects)) {
  const content = fs.readFileSync(netlifyRedirects, 'utf8');
  if (content.includes('/content/')) {
    console.log('✅ Netlify redirects configured');
  } else {
    console.log('❌ Netlify redirects missing content protection');
  }
} else {
  console.log('⚠️  public/_redirects not found (only needed for Netlify)');
}

// Check API route
console.log('\n🔌 Checking API route:');
const apiRoute = path.join(process.cwd(), 'src/app/api/blog/route.ts');
if (fs.existsSync(apiRoute)) {
  const content = fs.readFileSync(apiRoute, 'utf8');
  if (content.includes('src/content/blog')) {
    console.log('✅ API route uses correct content path');
  } else {
    console.log('❌ API route using incorrect content path');
  }
} else {
  console.log('❌ API route not found');
}

console.log('\n🎯 Security check complete!');
console.log('\n📋 Next steps:');
console.log('1. Deploy your changes');
console.log('2. Test that /content/ and /src/content/ return 404');
console.log('3. Verify blog functionality still works');
console.log('4. Check that no MDX files are publicly accessible');
