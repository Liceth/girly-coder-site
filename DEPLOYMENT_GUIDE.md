# Deployment Guide for Girly Coder Site

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
**Best for Next.js projects - Free tier available**

1. **Connect Repository:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your `girly-coder-site` repository

2. **Configure Settings:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables (if needed):**
   - Add any API keys or environment variables

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

5. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records as instructed

### Option 2: Netlify
**Good alternative with generous free tier**

1. **Connect Repository:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "New site from Git"

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy and add domain**

### Option 3: Railway
**Simple deployment with good performance**

1. **Connect Repository:**
   - Visit [railway.app](https://railway.app)
   - Sign up/login with GitHub
   - Create new project from GitHub repo

2. **Auto-deploy:**
   - Railway auto-detects Next.js
   - Deploys automatically

## 🔧 Pre-deployment Checklist

- [x] ✅ Next.js config optimized for production
- [x] ✅ Security headers configured
- [x] ✅ Image optimization enabled
- [x] ✅ Compression enabled

## 📝 Domain Configuration

### DNS Settings (for your custom domain)

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.19.36

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

## 🛠️ Local Testing

Before deploying, test your build locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test production build
npm start
```

## 📊 Performance Optimization

Your project is already optimized with:
- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Image optimization
- ✅ Security headers
- ✅ Compression enabled

## 🔍 Post-deployment

1. **Test your site:**
   - Check all pages load correctly
   - Test on mobile devices
   - Verify animations work
   - Check contact forms

2. **SEO Verification:**
   - Your metadata is already configured in `layout.tsx`
   - Open Graph tags are set up
   - Twitter cards are configured

3. **Analytics (Optional):**
   - Consider adding Google Analytics
   - Or Vercel Analytics if using Vercel

## 🆘 Troubleshooting

**Build fails:**
- Check Node.js version (use 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

**Domain not working:**
- Verify DNS settings
- Wait for DNS propagation (up to 48 hours)
- Check SSL certificate status

**Performance issues:**
- Images are already optimized
- Consider lazy loading for heavy components
- Monitor Core Web Vitals

## 📞 Support

- **Vercel:** Excellent Next.js support
- **Netlify:** Good documentation and community
- **Railway:** Simple but effective

---

**Recommended: Start with Vercel for the best Next.js experience!** 🎉 