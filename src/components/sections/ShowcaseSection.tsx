'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShoppingCart, ChartLine, DeviceMobile } from '@phosphor-icons/react';
import { Card } from '../ui/Card';
import { css } from '../../../styled-system/css';
import { flex, grid, center } from '../../../styled-system/patterns';

const sectionStyles = css({
  py: '20',
  px: '4',
  backgroundColor: 'background-light',
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

const projectsGridStyles = grid({
  columns: { base: 1, md: 3 },
  gap: '8',
});

const projectCardStyles = css({
  _hover: {
    transform: 'translateY(-8px)',
  },
});

const imageContainerStyles = css({
  position: 'relative',
  h: '48',
  bg: 'glass',
  borderRadius: '0.75rem',
  mb: '4',
  overflow: 'hidden',
});

const iconOverlayStyles = center({
  position: 'absolute',
  inset: 0,
  bg: 'rgba(59, 130, 246, 0.1)',
  color: 'primary',
  transition: 'all 0.3s',
  _groupHover: {
    bg: 'rgba(59, 130, 246, 0.2)',
    transform: 'scale(1.1)',
  },
});

const projectTitleStyles = css({
  fontSize: 'xl',
  fontWeight: '600',
  color: 'foreground',
  mb: '2',
});

const projectDescriptionStyles = css({
  color: 'foreground-muted',
  lineHeight: '1.6',
});

const projects = [
  {
    key: 'ecommerce',
    icon: ShoppingCart,
  },
  {
    key: 'dashboard',
    icon: ChartLine,
  },
  {
    key: 'mobile',
    icon: DeviceMobile,
  },
];

export function ShowcaseSection() {
  const t = useTranslations();

  return (
    <section id="showcase" className={sectionStyles}>
      <div className={containerStyles}>
        <motion.div
          className={headerStyles}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={titleStyles}>
            {t('showcase.title')}
          </h2>
          <p className={subtitleStyles}>
            {t('showcase.subtitle')}
          </p>
        </motion.div>

        <div className={projectsGridStyles}>
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className={projectCardStyles}>
                  <div className={css({ position: 'relative', _hover: { cursor: 'pointer' } })}>
                    <div className={imageContainerStyles}>
                      <div className={iconOverlayStyles}>
                        <IconComponent size={64} />
                      </div>
                    </div>
                    <h3 className={projectTitleStyles}>
                      {t(`showcase.projects.${project.key}.title`)}
                    </h3>
                    <p className={projectDescriptionStyles}>
                      {t(`showcase.projects.${project.key}.description`)}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}