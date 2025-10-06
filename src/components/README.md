# Components Documentation

This directory contains all React components used in the Modern Landing Page project.

## Structure

```
components/
├── layout/           # Layout components (Navbar, Footer, etc.)
├── sections/         # Page section components
└── ui/              # Reusable UI components
```

## Layout Components

### Navbar
- **File**: `layout/Navbar.tsx`
- **Description**: Sticky navigation bar with glassmorphism effect
- **Features**: 
  - Smooth scroll navigation
  - Language toggle
  - Responsive design
  - Background transition on scroll

### Footer
- **File**: `layout/Footer.tsx`
- **Description**: Minimal footer with social links
- **Features**:
  - Copyright information
  - Social media links
  - Responsive layout

### LanguageToggle
- **File**: `layout/LanguageToggle.tsx`
- **Description**: Language switcher component
- **Features**:
  - Dropdown language selection
  - Dynamic text direction (LTR/RTL)
  - Smooth animations

## Section Components

### HeroSection
- **File**: `sections/HeroSection.tsx`
- **Description**: Main hero section with animated content
- **Features**:
  - Animated heading with gradient text
  - Metrics counters
  - CTA buttons
  - Responsive design

### FeaturesSection
- **File**: `sections/FeaturesSection.tsx`
- **Description**: Features showcase with cards
- **Features**:
  - Grid layout
  - Animated cards
  - Phosphor icons
  - Hover effects

### ShowcaseSection
- **File**: `sections/ShowcaseSection.tsx`
- **Description**: Project showcase section
- **Features**:
  - Project preview cards
  - Smooth animations
  - Image placeholders

### CTASection
- **File**: `sections/CTASection.tsx`
- **Description**: Call-to-action section
- **Features**:
  - Gradient background
  - Animated content
  - Primary CTA button

### ContactSection
- **File**: `sections/ContactSection.tsx`
- **Description**: Contact form section
- **Features**:
  - Form validation
  - Error handling
  - Success/error messages
  - API integration

## UI Components

### Button
- **File**: `ui/Button.tsx`
- **Description**: Reusable button component
- **Variants**: primary, secondary, outline, ghost
- **Sizes**: sm, md, lg
- **Features**: Loading states, disabled states, full type safety

### Input
- **File**: `ui/Input.tsx`
- **Description**: Form input component
- **Features**:
  - Label support
  - Error states
  - Helper text
  - Validation styling

### Textarea
- **File**: `ui/Textarea.tsx`
- **Description**: Form textarea component
- **Features**:
  - Auto-resize capability
  - Error states
  - Character count

### Card
- **File**: `ui/Card.tsx`
- **Description**: Card container component
- **Variants**: default, glass, elevated
- **Features**: Hover effects, flexible content

### Logo
- **File**: `ui/Logo.tsx`
- **Description**: Animated logo component
- **Features**: Click to scroll top, hover effects

### Modal
- **File**: `ui/Modal.tsx`
- **Description**: Modal dialog component
- **Features**:
  - Portal rendering
  - Smooth animations
  - Keyboard navigation
  - Backdrop click

## Usage Examples

### Using Button Component
```tsx
import { Button } from '@/components/ui';

// Primary button
<Button variant="primary" size="lg">
  Get Started
</Button>

// Outline button with icon
<Button variant="outline" size="md">
  Learn More
  <ArrowRight size={20} />
</Button>
```

### Using Card Component
```tsx
import { Card } from '@/components/ui';

<Card variant="elevated">
  <h3>Feature Title</h3>
  <p>Feature description goes here.</p>
</Card>
```

### Using Modal Component
```tsx
import { Modal } from '@/components/ui';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here.</p>
</Modal>
```

## Best Practices

1. **Type Safety**: All components are written in TypeScript with proper prop types
2. **Accessibility**: Components follow WCAG guidelines with proper ARIA labels
3. **Performance**: Components are optimized with React.memo where appropriate
4. **Styling**: Uses PandaCSS with design tokens for consistency
5. **Testing**: Each component should have corresponding test files

## Component Guidelines

### Creating New Components

1. **File Structure**:
   ```tsx
   // ComponentName.tsx
   import React from 'react';
   import { css } from '../../../styled-system/css';
   
   interface ComponentNameProps {
     // Props definition
   }
   
   export function ComponentName({}: ComponentNameProps) {
     return <div>Component content</div>;
   }
   ```

2. **Styling**: Use PandaCSS with design tokens
3. **Props**: Define proper TypeScript interfaces
4. **Accessibility**: Include ARIA labels and keyboard navigation
5. **Testing**: Create corresponding test files

### Styling Guidelines

- Use design tokens from `panda.config.ts`
- Follow the established color palette
- Use consistent spacing scale
- Implement responsive design patterns
- Add smooth transitions and animations

## Animation Patterns

Components use Framer Motion for animations:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Responsive Design

All components are built with mobile-first responsive design:

```tsx
const styles = css({
  fontSize: { base: '1rem', md: '1.125rem', lg: '1.25rem' },
  padding: { base: '1rem', md: '1.5rem', lg: '2rem' },
});
```

## Testing

Each component should have:
- Unit tests for functionality
- Accessibility tests
- Visual regression tests (optional)
- Interaction tests

Example test structure:
```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('')).toBeInTheDocument();
  });
});
```