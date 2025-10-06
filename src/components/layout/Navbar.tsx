'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';
import { LanguageToggle } from './LanguageToggle';
import { css } from '../../../styled-system/css';
import { flex, center } from '../../../styled-system/patterns';

const navStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  padding: '1rem 0',
  transition: 'all 0.3s ease',
});

const glassStyles = css({
  backgroundColor: 'glass',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid',
  borderColor: 'glass-border',
});

const containerStyles = flex({
  align: 'center',
  justify: 'space-between',
  maxW: '7xl',
  mx: 'auto',
  px: '4',
});

const navLinksStyles = flex({
  gap: '8',
  display: { base: 'none', md: 'flex' },
  align: 'center',
});

const linkStyles = css({
  color: 'foreground',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
  cursor: 'pointer',
  _hover: {
    color: 'primary',
  },
});

export function Navbar() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`${navStyles} ${isScrolled ? glassStyles : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={containerStyles}>
        <Logo />
        
        <div className={navLinksStyles}>
          <button onClick={() => scrollToSection('hero')} className={linkStyles}>
            {t('navigation.home')}
          </button>
          <button onClick={() => scrollToSection('features')} className={linkStyles}>
            {t('navigation.features')}
          </button>
          <button onClick={() => scrollToSection('showcase')} className={linkStyles}>
            {t('navigation.showcase')}
          </button>
          <button onClick={() => scrollToSection('contact')} className={linkStyles}>
            {t('navigation.contact')}
          </button>
        </div>

        <div className={flex({ gap: '4', align: 'center' })}>
          <LanguageToggle />
        </div>
      </div>
    </motion.nav>
  );
}