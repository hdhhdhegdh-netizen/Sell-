import React from 'react';
import { css, cx } from '../../../styled-system/css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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

const textareaStyles = css({
  padding: '0.75rem 1rem',
  border: '1px solid',
  borderColor: 'glass-border',
  borderRadius: '0.5rem',
  backgroundColor: 'glass',
  color: 'foreground',
  fontSize: '1rem',
  fontFamily: 'inherit',
  resize: 'vertical',
  minHeight: '120px',
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

export function Textarea({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const textareaClassName = cx(
    textareaStyles,
    error && errorStyles,
    className
  );

  return (
    <div className={containerStyles}>
      {label && (
        <label htmlFor={textareaId} className={labelStyles}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={textareaClassName}
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