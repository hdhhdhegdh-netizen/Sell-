import React from 'react';
import { css, cx } from '../../../styled-system/css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated';
}

const cardStyles = css({
  backgroundColor: 'background-light',
  border: '1px solid',
  borderColor: 'glass-border',
  borderRadius: '1rem',
  padding: '1.5rem',
  transition: 'all 0.3s ease',
});

const variantStyles = {
  default: css({
    backgroundColor: 'background-light',
  }),
  glass: css({
    backgroundColor: 'glass',
    backdropFilter: 'blur(10px)',
  }),
  elevated: css({
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    _hover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
  }),
};

export function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  const styles = cx(
    cardStyles,
    variantStyles[variant],
    className
  );

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  );
}