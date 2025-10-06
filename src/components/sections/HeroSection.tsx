'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Download, Star } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { css } from '../../../styled-system/css';
import { flex, center, grid } from '../../../styled-system/patterns';

const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, token(colors.background) 0%, token(colors.background-light) 100%)',
});

const containerStyles = css({
  maxW: '7xl',
  mx: 'auto',
  px: '4',
  w: 'full',
});

const contentStyles = grid({
  columns: { base: 1, lg: 2 },
  gap: '12',
  alignItems: 'center',
  minHeight: '80vh',
});

const textContentStyles = flex({
  direction: 'column',
  gap: '6',
  align: { base: 'center', lg: 'start' },
  textAlign: { base: 'center', lg: 'left' },
});

const titleStyles = css({
  fontSize: { base: '3xl', md: '4xl', lg: '6xl' },
  fontWeight: 'bold',
  lineHeight: '1.1',
  background: 'linear-gradient(135deg, token(colors.primary) 0%, token(colors.accent) 100%)',
  backgroundClip: 'text',
  color: 'transparent',
});

const subtitleStyles = css({
  fontSize: { base: 'lg', md: 'xl' },
  color: 'foreground-muted',
  maxW: '2xl',
  lineHeight: '1.6',
});

const ctaStyles = flex({
  gap: '4',
  wrap: 'wrap',
  justify: { base: 'center', lg: 'start' },
});

const metricsStyles = grid({
  columns: 3,
  gap: '8',
  mt: '12',
});

const metricStyles = center({
  direction: 'column',
  gap: '2',
  textAlign: 'center',
});

const metricValueStyles = css({
  fontSize: '2xl',
  fontWeight: 'bold',
  color: 'primary',
});

const metricLabelStyles = css({
  fontSize: 'sm',
  color: 'foreground-muted',
});

const visualStyles = css({
  position: 'relative',
  display: { base: 'none', lg: 'block' },
});

const floatingElementStyles = css({
  position: 'absolute',
  w: '20',
  h: '20',
  bg: 'primary',
  borderRadius: '50%',
  opacity: 0.1,
  animation: 'float 6s ease-in-out infinite',
});

export function HeroSection() {
  const t = useTranslations();
  const [metrics, setMetrics] = useState({
    users: 0,
    downloads: 0,
    stars: 0,
  });

  useEffect(() => {
    const targets = { users: 10000, downloads: 50000, stars: 2500 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setMetrics({
        users: Math.floor(targets.users * progress),
        downloads: Math.floor(targets.downloads * progress),
        stars: Math.floor(targets.stars * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <section id="hero" className={sectionStyles}>
      <div className={containerStyles}>
        <div className={contentStyles}>
          <motion.div
            className={textContentStyles}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={titleStyles}>
              {t('hero.title')}
            </h1>
            <p className={subtitleStyles}>
              {t('hero.subtitle')}
            </p>
            
            <div className={ctaStyles}>
              <Button size="lg">
                {t('hero.ctaPrimary')}
              </Button>
              <Button variant="outline" size="lg">
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            <div className={metricsStyles}>
              <div className={metricStyles}>
                <div className={metricValueStyles}>
                  {formatNumber(metrics.users)}
                </div>
                <div className={metricLabelStyles}>
                  {t('hero.users')}
                </div>
              </div>
              <div className={metricStyles}>
                <div className={metricValueStyles}>
                  {formatNumber(metrics.downloads)}
                </div>
                <div className={metricLabelStyles}>
                  {t('hero.downloads')}
                </div>
              </div>
              <div className={metricStyles}>
                <div className={metricValueStyles}>
                  {formatNumber(metrics.stars)}
                </div>
                <div className={metricLabelStyles}>
                  {t('hero.stars')}
                </div>
              </div>
            </div>
          </motion.div>

          <div className={visualStyles}>
            <div className={floatingElementStyles} style={{ top: '20%', left: '20%' }} />
            <div className={floatingElementStyles} style={{ top: '60%', right: '20%', animationDelay: '2s' }} />
            <div className={floatingElementStyles} style={{ bottom: '20%', left: '40%', animationDelay: '4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}