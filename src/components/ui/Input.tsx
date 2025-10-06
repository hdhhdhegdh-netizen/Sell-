import React from 'react';
import { css, cx } from '../../../styled-system/css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const containerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
});

const labelStyles = css({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: 'foreground',
});

const inputStyles = css({
  padding: '0.75rem 1rem',
  border: '1px solid',
  borderColor: 'glass-border',
  borderRadius: '0.5rem',
  backgroundColor: 'glass',
  color: 'foreground',
  fontSize: '1rem',
  transition: 'all 0.2s',
  _placeholder: {
    color: 'foreground-muted',
  },
  _focus: {
    outline: 'none',
    borderColor: 'primary',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

const errorStyles = css({
  borderColor: 'red.500',
  _focus: {
    borderColor: 'red.500',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
  },
});

const messageStyles = css({
  fontSize: '0.875rem',
});

const errorTextStyles = css({
  color: 'red.500',
});

const helperTextStyles = css({
  color: 'foreground-muted',
});

export function Input({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const inputClassName = cx(
    inputStyles,
    error && errorStyles,
    className
  );

  return (
    <div className={containerStyles}>
      {label && (
        <label htmlFor={inputId} className={labelStyles}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClassName}
        {...props}
      />
      {error && (
        <p className={cx(messageStyles, errorTextStyles)}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className={cx(messageStyles, helperTextStyles)}>
          {helperText}
        </p>
      )}
    </div>
  );
}