'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Card } from '../ui/Card';
import { css } from '../../../styled-system/css';
import { flex, center } from '../../../styled-system/patterns';

const sectionStyles = css({
  py: '20',
  px: '4',
});

const containerStyles = css({
  maxW: '4xl',
  mx: 'auto',
});

const headerStyles = center({
  direction: 'column',
  gap: '4',
  textAlign: 'center',
  mb: '12',
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

const formContainerStyles = css({
  maxW: '2xl',
  mx: 'auto',
});

const formStyles = flex({
  direction: 'column',
  gap: '6',
});

const inputGroupStyles = flex({
  direction: { base: 'column', md: 'row' },
  gap: '4',
});

const submitButtonStyles = css({
  alignSelf: 'flex-start',
});

const messageStyles = css({
  padding: '1rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '500',
});

const successStyles = css({
  backgroundColor: 'rgba(34, 197, 94, 0.1)',
  color: 'rgb(34, 197, 94)',
  border: '1px solid rgba(34, 197, 94, 0.2)',
});

const errorStyles = css({
  backgroundColor: 'rgba(239, 68, 68, 0.1)',
  color: 'rgb(239, 68, 68)',
  border: '1px solid rgba(239, 68, 68, 0.2)',
});

export function ContactSection() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className={sectionStyles}>
      <div className={containerStyles}>
        <motion.div
          className={headerStyles}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={titleStyles}>
            {t('contact.title')}
          </h2>
          <p className={subtitleStyles}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className={formContainerStyles}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card variant="glass">
            <form onSubmit={handleSubmit} className={formStyles}>
              <div className={inputGroupStyles}>
                <Input
                  name="name"
                  label={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  disabled={status === 'submitting'}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  disabled={status === 'submitting'}
                  required
                />
              </div>
              
              <Textarea
                name="message"
                label={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                disabled={status === 'submitting'}
                required
              />

              {status === 'success' && (
                <div className={cx(messageStyles, successStyles)}>
                  {t('contact.form.success')}
                </div>
              )}
              
              {status === 'error' && (
                <div className={cx(messageStyles, errorStyles)}>
                  {t('contact.form.error')}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'submitting'}
                className={submitButtonStyles}
              >
                {status === 'submitting' ? (
                  <>Submitting...</>
                ) : (
                  <>
                    {t('contact.form.submit')}
                    <Send size={20} />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}