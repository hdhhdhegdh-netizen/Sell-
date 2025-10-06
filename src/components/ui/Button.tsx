import React from 'react';
import { css, cx } from '../../../styled-system/css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const buttonBaseStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2',
  fontWeight: '500',
  borderRadius: '0.5rem',
  transition: 'all 0.2s',
  cursor: 'pointer',
  border: '1px solid transparent',
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  _focus: {
    outline: '2px solid',
    outlineColor: 'primary',
    outlineOffset: '2px',
  },
});

const variantStyles = {
  primary: css({
    backgroundColor: 'primary',
    color: 'white',
    _hover: {
      backgroundColor: 'primary-dark',
      transform: 'translateY(-1px)',
    },
    _active: {
      transform: 'translateY(0)',
    },
  }),
  secondary: css({
    backgroundColor: 'accent',
    color: 'white',
    _hover: {
      backgroundColor: 'primary',
      transform: 'translateY(-1px)',
    },
    _active: {
      transform: 'translateY(0)',
    },
  }),
  outline: css({
    backgroundColor: 'transparent',
    borderColor: 'primary',
    color: 'primary',
    _hover: {
      backgroundColor: 'primary',
      color: 'white',
    },
  }),
  ghost: css({
    backgroundColor: 'transparent',
    color: 'foreground',
    _hover: {
      backgroundColor: 'glass',
      color: 'primary',
    },
  }),
};

const sizeStyles = {
  sm: css({
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    minHeight: '2.25rem',
  }),
  md: css({
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    minHeight: '2.75rem',
  }),
  lg: css({
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    minHeight: '3.25rem',
  }),
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const styles = cx(
    buttonBaseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}