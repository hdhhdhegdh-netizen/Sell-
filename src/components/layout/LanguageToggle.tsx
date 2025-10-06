'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from '@phosphor-icons/react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

const toggleStyles = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  padding: '0.5rem 1rem',
  backgroundColor: 'glass',
  border: '1px solid',
  borderColor: 'glass-border',
  borderRadius: '0.5rem',
  color: 'foreground',
  cursor: 'pointer',
  transition: 'all 0.2s',
  _hover: {
    backgroundColor: 'glass',
    borderColor: 'primary',
  },
});

const dropdownStyles = css({
  position: 'absolute',
  top: '100%',
  right: 0,
  mt: '0.5rem',
  backgroundColor: 'glass',
  backdropFilter: 'blur(10px)',
  border: '1px solid',
  borderColor: 'glass-border',
  borderRadius: '0.5rem',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  minWidth: '120px',
  zIndex: 10,
});

const optionStyles = css({
  padding: '0.75rem 1rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  _hover: {
    backgroundColor: 'background-light',
  },
  _first: {
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
  },
  _last: {
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
  },
});

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
  ];

  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={css({ position: 'relative' })}>
      <button
        className={toggleStyles}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        <Globe size={20} />
        <span className={css({ fontWeight: '500' })}>
          {languages.find(lang => lang.code === currentLocale)?.name}
        </span>
      </button>

      {isOpen && (
        <div className={dropdownStyles}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={optionStyles}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}