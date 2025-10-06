'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { SmoothScrollProvider } from './SmoothScrollProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}