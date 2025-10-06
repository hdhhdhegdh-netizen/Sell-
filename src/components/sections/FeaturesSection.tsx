'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Lightning, 
  DeviceMobile, 
  Accessibility, 
  Code, 
  Globe, 
  ChartBar 
} from '@phosphor-icons/react';
import { Card } from '../ui/Card';
import { css } from '../../../styled-system/css';
import { flex, grid, center } from '../../../styled-system/patterns';

const sectionStyles = css({
  py: '20',
  px: '4',
});

const containerStyles = css({
  maxW: '7xl',
  mx: 'auto',
});

const headerStyles = flex({
  direction: 'column',
  gap: '4',
  align: 'center',
  textAlign: 'center',
  mb: '16',
});

const titleStyles = css({
  fontSize: { base: '3xl', md: '4xl' },
  fontWeight: 'bold',
  color: 'foreground',
});

const subtitleStyles = css({
  fontSize: 'xl',
  color: 'foreground-muted',
  maxW: '2xl',
});

const featuresGridStyles = grid({
  columns: { base: 1, md: 2, lg: 3 },
  gap: '8',
});

const featureCardStyles = css({
  textAlign: 'center',
  _hover: {
    transform: 'translateY(-4px)',
  },
});

const iconContainerStyles = center({
  w: '16',
  h: '16',
  bg: 'primary',
  borderRadius: '1rem',
  mx: 'auto',
  mb: '4',
  color: 'white',
});

const featureTitleStyles = css({
  fontSize: 'xl',
  fontWeight: '600',
  color: 'foreground',
  mb: '2',
});

const featureDescriptionStyles = css({
  color: 'foreground-muted',
  lineHeight: '1.6',
});

const features = [
  {
    key: 'performance',
    icon: Lightning,
  },
  {
    key: 'responsive',
    icon: DeviceMobile,
  },
  {
    key: 'accessible',
    icon: Accessibility,
  },
  {
    key: 'modern',
    icon: Code,
  },
  {
    key: 'international',
    icon: Globe,
  },
  {
    key: 'optimized',
    icon: ChartBar,
  },
];

export function FeaturesSection() {
  const t = useTranslations();

  return (
    <section id="features" className={sectionStyles}>
      <div className={containerStyles}>
        <motion.div
          className={headerStyles}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={titleStyles}>
            {t('features.title')}
          </h2>
          <p className={subtitleStyles}>
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className={featuresGridStyles}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className={featureCardStyles}>
                  <div className={iconContainerStyles}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className={featureTitleStyles}>
                    {t(`features.items.${feature.key}.title`)}
                  </h3>
                  <p className={featureDescriptionStyles}>
                    {t(`features.items.${feature.key}.description`)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}