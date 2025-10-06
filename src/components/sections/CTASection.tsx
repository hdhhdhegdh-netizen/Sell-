'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { css } from '../../../styled-system/css';
import { flex, center } from '../../../styled-system/patterns';

const sectionStyles = css({
  py: '20',
  px: '4',
  background: 'linear-gradient(135deg, token(colors.primary) 0%, token(colors.accent) 100%)',
});

const containerStyles = css({
  maxW: '4xl',
  mx: 'auto',
});

const contentStyles = center({
  direction: 'column',
  gap: '6',
  textAlign: 'center',
});

const titleStyles = css({
  fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
  fontWeight: 'bold',
  color: 'white',
  lineHeight: '1.2',
});

const subtitleStyles = css({
  fontSize: 'xl',
  color: 'rgba(255, 255, 255, 0.9)',
  maxW: '2xl',
  lineHeight: '1.6',
});

const buttonStyles = css({
  backgroundColor: 'white',
  color: 'primary',
  _hover: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transform: 'translateY(-2px)',
  },
});

export function CTASection() {
  const t = useTranslations();

  return (
    <section id="cta" className={sectionStyles}>
      <div className={containerStyles}>
        <motion.div
          className={contentStyles}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={titleStyles}>
            {t('cta.title')}
          </h2>
          <p className={subtitleStyles}>
            {t('cta.subtitle')}
          </p>
          <Button size="lg" className={buttonStyles}>
            {t('cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}