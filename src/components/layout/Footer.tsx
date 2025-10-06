import React from 'react';
import { useTranslations } from 'next-intl';
import { Github, Twitter, Linkedin } from '@phosphor-icons/react';
import { css } from '../../../styled-system/css';
import { flex, center } from '../../../styled-system/patterns';

const footerStyles = css({
  backgroundColor: 'background-light',
  borderTop: '1px solid',
  borderColor: 'glass-border',
  py: '12',
  mt: '20',
});

const containerStyles = css({
  maxW: '7xl',
  mx: 'auto',
  px: '4',
});

const contentStyles = flex({
  direction: { base: 'column', md: 'row' },
  justify: 'space-between',
  align: 'center',
  gap: '8',
});

const copyrightStyles = css({
  color: 'foreground-muted',
  textAlign: { base: 'center', md: 'left' },
});

const socialStyles = flex({
  gap: '4',
  align: 'center',
});

const socialLinkStyles = css({
  color: 'foreground-muted',
  transition: 'color 0.2s',
  _hover: {
    color: 'primary',
  },
});

export function Footer() {
  const t = useTranslations();

  return (
    <footer className={footerStyles}>
      <div className={containerStyles}>
        <div className={contentStyles}>
          <p className={copyrightStyles}>
            {t('footer.copyright')}
          </p>
          
          <div className={socialStyles}>
            <span className={css({ color: 'foreground-muted', fontSize: 'sm' })}>
              {t('footer.social')}
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkStyles}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkStyles}
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkStyles}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}