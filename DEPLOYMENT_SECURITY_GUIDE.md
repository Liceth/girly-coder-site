# 🔒 Deployment Security Guide

## Issue: MDX Files Publicly Accessible

### Problem
The MDX blog content files were being deployed and publicly accessible on your domain, which is a security concern and not the intended behavior.

### Solution Implemented

#### 1. **Moved Content Directory**
- **From:** `content/blog/` (root level)
- **To:** `src/content/blog/` (inside src directory)
- **Why:** Content inside `src/` is not served publicly by default

#### 2. **Updated Next.js Configuration**
Added security measures in `next.config.ts`:

```typescript
// Redirects to prevent direct access
async redirects() {
  return [
    {
      source: '/content/:path*',
      destination: '/404',
      permanent: false,
    },
    {
      source: '/src/content/:path*',
      destination: '/404',
      permanent: false,
    },
  ];
},

// Security headers for content directory
async headers() {
  return [
    {
      source: '/src/content/:path*',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex, nofollow',
        },
        {
          key: 'Cache-Control',
          value: 'no-cache, no-store, must-revalidate',
        },
      ],
    },
  ];
},
```

#### 3. **Created Deployment Exclusions**

**For Vercel:** `.vercelignore`
```
content/
src/content/
```

**For Netlify:** `public/_redirects`
```
/content/* /404 404
/src/content/* /404 404
```

#### 4. **Updated API Path**
- **API Route:** `src/app/api/blog/route.ts`
- **New Path:** `src/content/blog/`
- **Access:** Only through API endpoints, not direct file access

## Security Measures

### ✅ **What's Protected:**
- MDX files are not publicly accessible
- Direct file access returns 404
- Search engines won't index content files
- No caching of content files

### ✅ **What Still Works:**
- Blog API endpoints function normally
- Blog posts display correctly
- All blog functionality preserved
- SEO and metadata still work

## Deployment Checklist

### Before Deploying:
- [ ] Content directory is in `src/content/blog/`
- [ ] `.vercelignore` includes content directories
- [ ] `public/_redirects` includes redirects (for Netlify)
- [ ] Next.js config has security headers and redirects

### After Deploying:
- [ ] Test that `/content/` returns 404
- [ ] Test that `/src/content/` returns 404
- [ ] Verify blog posts still load correctly
- [ ] Check that API endpoints work
- [ ] Confirm no MDX files are publicly accessible

## Testing Security

### Test URLs (should all return 404):
```
https://yourdomain.com/content/blog/
https://yourdomain.com/content/blog/any-file.mdx
https://yourdomain.com/src/content/blog/
https://yourdomain.com/src/content/blog/any-file.mdx
```

### Test URLs (should work normally):
```
https://yourdomain.com/blog
https://yourdomain.com/blog/your-post-slug
https://yourdomain.com/api/blog?action=all
```

## Additional Security Recommendations

### 1. **Environment Variables**
Ensure sensitive data is in environment variables:
```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### 2. **API Rate Limiting**
Consider adding rate limiting to blog API:
```typescript
// In API route
const rateLimit = new Map();

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100;

  // Rate limiting logic here
}
```

### 3. **Content Validation**
Add validation to ensure only valid MDX files are processed:
```typescript
// In API route
function isValidMDXFile(fileName: string): boolean {
  return fileName.endsWith('.mdx') && !fileName.startsWith('.');
}
```

## Monitoring

### Check These Regularly:
- [ ] No content files are publicly accessible
- [ ] Blog functionality works correctly
- [ ] API endpoints respond properly
- [ ] No security headers are missing
- [ ] Redirects work as expected

## Troubleshooting

### If Content Files Are Still Accessible:
1. Clear deployment cache
2. Verify `.vercelignore` or `_redirects` files
3. Check Next.js config is deployed
4. Test redirects manually

### If Blog Stops Working:
1. Check API route path is correct
2. Verify content directory exists
3. Test API endpoints directly
4. Check file permissions

---

**Your blog content is now secure and properly protected from public access while maintaining full functionality!** 🔒✨
