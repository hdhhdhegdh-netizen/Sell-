# Modern Landing Page

A production-ready, modern landing page built with Next.js 15.3.5, TypeScript, and cutting-edge web technologies.

## ✨ Features

- ⚡ **Next.js 15.3.5** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **PandaCSS** for modern styling
- 🧩 **Ark UI** for accessible components
- 🎭 **Motion One** + **Framer Motion** for animations
- 🌐 **next-intl v3** for internationalization (EN/AR)
- 📱 **Fully Responsive** with mobile-first design
- ♿ **WCAG Compliant** with accessibility features
- 🔍 **SEO Optimized** with dynamic metadata
- 🚀 **Performance Optimized** with Core Web Vitals

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15.3.5 | React framework with App Router |
| TypeScript | Type-safe development |
| PandaCSS | Modern CSS-in-JS with design tokens |
| Ark UI | Headless, accessible UI components |
| Motion One | Lightweight animations |
| Framer Motion | Advanced animations and gestures |
| Lenis | Smooth scrolling |
| Phosphor Icons | Beautiful icon library |
| next-intl v3 | Internationalization |
| Jest | Unit testing |
| Playwright | E2E testing |

## 📦 Installation

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

## 🚀 Development Commands

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

# Code quality
npm run lint
npm run format
```

## 🌍 Internationalization

The project supports multiple languages with full RTL support:

- **English** (`en`) - Default
- **Arabic** (`ar`) - RTL layout

### Adding New Languages

1. Create translation file in `app/(i18n)/[locale].json`
2. Update `locales` array in `lib/i18n.ts`
3. Configure routing in `next.config.js`

## 🎨 Design System

### Design Tokens
- **Colors**: Primary, accent, background, foreground
- **Typography**: Sans-serif and serif fonts
- **Spacing**: Consistent spacing scale
- **Animations**: Predefined animations

### Components
- **Button**: Multiple variants and sizes
- **Input**: Form inputs with validation
- **Card**: Elevated cards with hover effects
- **Navigation**: Sticky navbar with glassmorphism

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Fluid typography** and spacing
- **Touch-friendly** interactions

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** compatible

## 🔍 SEO Features

- **Dynamic metadata** generation
- **Open Graph** tags
- **Twitter Cards**
- **Structured data**
- **Sitemap** generation
- **Canonical URLs**

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
- Component testing with Jest
- E2E testing with Playwright
- Accessibility testing
- Performance testing

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy with automatic CI/CD

### Docker
```bash
# Build Docker image
docker build -t modern-landing-page .

# Run container
docker run -p 3000:3000 modern-landing-page
```

## 📊 Performance

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Optimization Features
- Code splitting
- Image optimization
- CSS optimization
- Bundle analysis
- Lazy loading

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
CONTACT_EMAIL=your-email@domain.com
```

### Customization
- Update design tokens in `panda.config.ts`
- Modify translations in `app/(i18n)/`
- Customize components in `src/components/`

## 📄 Documentation

- [Architecture Documentation](./docs/architecture.md)
- [Runbook](./docs/runbook.md)
- [Component Documentation](./src/components/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions or issues:
- Check the [documentation](./docs/)
- Create a [GitHub issue](https://github.com/your-org/modern-landing-page/issues)
- Contact the development team

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [PandaCSS](https://panda-css.com/) for the styling solution
- [Ark UI](https://ark-ui.com/) for accessible components
- [Phosphor Icons](https://phosphoricons.com/) for beautiful icons

---

Built with ❤️ using Next.js, TypeScript, and PandaCSS