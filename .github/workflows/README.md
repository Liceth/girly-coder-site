# GitHub Actions Workflows

This directory contains GitHub Actions workflows for deploying your Next.js project to Vercel.

## 🚀 Available Workflows

### 1. `deploy-vercel.yml` - Vercel Deployment
**Optimized for Next.js projects**

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**Required Secrets:**
- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

**Setup Instructions:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to Settings → Tokens
3. Create a new token and copy it
4. In your GitHub repo, go to Settings → Secrets and variables → Actions
5. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Found in your project settings
   - `VERCEL_PROJECT_ID`: Found in your project settings

### 2. `build-and-test.yml` - Build and Test
**Runs on every push and PR to test the build**

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Features:**
- Installs dependencies
- Runs linter
- Builds the project
- Tests the production build
- Uploads build artifacts

## 🔧 How to Use

### Quick Setup (Recommended)
1. Set up Vercel secrets (see instructions above)
2. Push to your repository
3. Both workflows will run automatically:
   - `build-and-test.yml` - Tests every push/PR
   - `deploy-vercel.yml` - Deploys to Vercel on main branch

### Manual Deployment Only
1. Delete the `deploy-vercel.yml` workflow
2. Keep only `build-and-test.yml` for testing
3. Deploy manually through Vercel dashboard

## 📝 Workflow Features

Both workflows include:
- ✅ Node.js 20 setup
- ✅ npm cache optimization
- ✅ Dependency installation
- ✅ Linting
- ✅ Build process
- ✅ Automatic deployment (Vercel workflow)

## 🛠️ Customization

### Environment Variables
Add environment variables to Vercel:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add any API keys or configuration values your app needs

### Build Commands
The workflows use the standard Next.js build commands:
- `npm ci` - Install dependencies
- `npm run lint` - Run linter
- `npm run build` - Build the project

### Node.js Version
All workflows use Node.js 20. To change this, update the `node-version` in each workflow file.

## 🚨 Troubleshooting

### Common Issues

**Build fails:**
- Check if all dependencies are in `package.json`
- Ensure TypeScript errors are resolved
- Verify Node.js version compatibility

**Deployment fails:**
- Verify all required secrets are set
- Check if the deployment platform is properly configured
- Ensure the project builds locally

**Linting fails:**
- Fix ESLint errors in your code
- Update ESLint configuration if needed

### Getting Help

1. Check the Actions tab in your GitHub repository
2. Click on failed workflows to see detailed logs
3. Review the deployment platform's documentation
4. Check your project's `DEPLOYMENT_GUIDE.md`

## 🎯 Best Practices

1. **Test locally first** - Run `npm run build` before pushing
2. **Monitor deployments** - Check the Actions tab regularly
3. **Keep secrets secure** - Never commit tokens to your repository
4. **Use branches** - Test on feature branches before merging to main
5. **Check Vercel dashboard** - Monitor your deployments and performance

## 🚀 Next Steps

1. **Set up Vercel project:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Get your project tokens

2. **Add GitHub secrets:**
   - Go to your repo → Settings → Secrets and variables → Actions
   - Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add Vercel deployment workflow"
   git push origin main
   ```

---

**Ready to deploy to Vercel! 🚀**
