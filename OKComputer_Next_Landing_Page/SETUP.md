# Setup Guide

## Quick Setup Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup PandaCSS
```bash
npm run prepare
```

### 3. Start Development Server
```bash
npm run dev
```

## Manual Setup Steps

### 1. Environment Variables
Copy `.env.example` to `.env.local` and configure:
```bash
cp .env.example .env.local
```

### 2. Install Missing Dependencies
If you encounter any missing dependencies:
```bash
npm install framer-motion @types/react @types/react-dom
npm install --save-dev @playwright/test prettier
```

### 3. Generate PandaCSS
```bash
npx panda codegen
```

### 4. Run Development Server
```bash
npm run dev
```

## Troubleshooting

### PandaCSS Issues
If PandaCSS styles are not applied:
1. Run `npm run prepare`
2. Check if `styled-system` folder is generated
3. Restart the development server

### TypeScript Issues
If you encounter TypeScript errors:
1. Run `npx tsc --noEmit`
2. Check for missing type definitions
3. Ensure all imports are correct

### Build Issues
If build fails:
1. Clear cache: `rm -rf .next node_modules`
2. Reinstall: `npm install`
3. Try building again: `npm run build`

## Development Tips

### Hot Reload
The development server supports hot reload. Changes will be reflected immediately.

### Debugging
Use browser DevTools for debugging. Source maps are enabled in development mode.

### Testing
Run tests with:
```bash
npm test          # Unit tests
npm run test:e2e  # E2E tests
```

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/src/components` - React components
- `/src/hooks` - Custom React hooks
- `/src/providers` - Context providers
- `/lib` - Utility functions and configurations
- `/public` - Static assets
- `/tests` - Test files

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests

## Next Steps

1. Customize the content in translation files (`app/(i18n)/`)
2. Update design tokens in `panda.config.ts`
3. Modify components to match your brand
4. Add your own images and content
5. Deploy to your preferred hosting platform