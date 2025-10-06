'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import { css, cx } from '../../../styled-system/css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlay?: boolean;
}

const overlayStyles = css({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 50,
  padding: '4',
});

const modalStyles = css({
  backgroundColor: 'background-light',
  border: '1px solid',
  borderColor: 'glass-border',
  borderRadius: '1rem',
  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
  position: 'relative',
  maxHeight: '90vh',
  overflow: 'hidden',
});

const sizeStyles = {
  sm: css({ maxW: 'md', w: 'full' }),
  md: css({ maxW: 'lg', w: 'full' }),
  lg: css({ maxW: '2xl', w: 'full' }),
  xl: css({ maxW: '4xl', w: 'full' }),
};

const headerStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '6',
  borderBottom: '1px solid',
  borderColor: 'glass-border',
});

const titleStyles = css({
  fontSize: 'xl',
  fontWeight: '600',
  color: 'foreground',
});

const closeButtonStyles = css({
  color: 'foreground-muted',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '2',
  borderRadius: '0.5rem',
  transition: 'all 0.2s',
  _hover: {
    backgroundColor: 'glass',
    color: 'foreground',
  },
});

const contentStyles = css({
  padding: '6',
  overflowY: 'auto',
  maxHeight: 'calc(90vh - 120px)',
});

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  closeOnOverlay = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlay && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={overlayStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className={cx(modalStyles, sizeStyles[size])}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {title && (
              <div className={headerStyles}>
                <h2 className={titleStyles}>{title}</h2>
                <button
                  className={closeButtonStyles}
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
            )}
            <div className={contentStyles}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}