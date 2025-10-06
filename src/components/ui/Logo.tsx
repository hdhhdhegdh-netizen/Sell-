import React from 'react';
import { css } from '../../../styled-system/css';

const logoStyles = css({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'primary',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  _hover: {
    transform: 'scale(1.05)',
  },
});

const iconStyles = css({
  w: '8',
  h: '8',
  bg: 'primary',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
});

export function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={logoStyles} onClick={scrollToTop}>
      <div className={iconStyles}>M</div>
      <span>Modern</span>
    </div>
  );
}