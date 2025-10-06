# Modern Landing Page - Runbook

## Quick Start Guide

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/modern-landing-page.git
cd modern-landing-page

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Development Commands

### Running the Application
```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run tests
npm test
npm run test:e2e
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code
npm run format
```

## Environment Variables

### Required Variables
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Modern Landing Page

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id

# Contact Form (Optional)
CONTACT_EMAIL=your-email@domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Development Variables
```env
# Development
NODE_ENV=development
NEXT_PUBLIC_ENV=development

# API Keys
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic CI/CD

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Docker Deployment
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Configuration

### Internationalization
- Add new languages in `app/(i18n)/`
- Update `locales` array in `lib/i18n.ts`
- Configure routing in `next.config.js`

### Styling
- Update design tokens in `panda.config.ts`
- Modify global styles in `app/globals.css`
- Customize component styles in respective files

### SEO
- Update metadata in `lib/seo.ts`
- Configure Open Graph images
- Set up sitemap generation

## Monitoring

### Performance Monitoring
- Vercel Analytics (if deployed on Vercel)
- Core Web Vitals tracking
- Bundle size monitoring

### Error Tracking
```bash
# Check build logs
npm run build 2>&1 | tee build.log

# Check runtime errors
npm run dev 2>&1 | tee dev.log
```

### Health Checks
```bash
# Check if site is responding
curl -I http://localhost:3000

# Check API endpoints
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules .next
npm install
npm run build
```

#### Style Issues
```bash
# Regenerate PandaCSS
npm run prepare
```

#### Type Errors
```bash
# Check TypeScript
npx tsc --noEmit
```

#### Performance Issues
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### Error Messages

#### "Module not found"
- Check import paths
- Verify file exists
- Check case sensitivity

#### "TypeScript errors"
- Run `npx tsc --noEmit`
- Fix type annotations
- Check for missing types

#### "Build timeout"
- Increase Node.js memory: `NODE_OPTIONS="--max_old_space_size=4096"`
- Check for large assets
- Optimize imports

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review security alerts
- Monitor performance metrics
- Update content regularly

### Backup Strategy
```bash
# Backup source code
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# Backup environment
cp .env.local .env.backup.$(date +%Y%m%d)
```

### Security Updates
```bash
# Check for security vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Update dependencies
npm update
```

## Scaling

### Performance Optimization
- Enable caching headers
- Optimize images
- Use CDN for static assets
- Implement lazy loading

### Traffic Handling
- Configure load balancing
- Set up monitoring alerts
- Implement rate limiting
- Use edge caching

## Support Contacts

### Development Team
- Technical Lead: [Name] <email@domain.com>
- Frontend Team: [Name] <email@domain.com>
- DevOps Team: [Name] <email@domain.com>

### Emergency Procedures
1. Check error logs
2. Rollback to previous version if needed
3. Contact on-call engineer
4. Document incident

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [PandaCSS Documentation](https://panda-css.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Tools
- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub Repository](https://github.com/your-org/modern-landing-page)
- [Analytics Dashboard](https://analytics.google.com)

### Community
- [Next.js Discord](https://nextjs.org/discord)
- [React Community](https://reactjs.org/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)