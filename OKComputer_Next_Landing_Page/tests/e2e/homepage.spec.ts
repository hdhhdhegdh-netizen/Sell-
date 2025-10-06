import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/Modern Landing Page/);
    
    // Check for main content
    await expect(page.locator('h1')).toContainText('Build the Future');
    await expect(page.locator('text=Transform your business')).toBeVisible();
  });

  test('should have navigation links', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    await expect(nav.locator('text=Home')).toBeVisible();
    await expect(nav.locator('text=Features')).toBeVisible();
    await expect(nav.locator('text=Showcase')).toBeVisible();
    await expect(nav.locator('text=Contact')).toBeVisible();
  });

  test('should scroll to sections when navigation links are clicked', async ({ page }) => {
    // Click Features link
    await page.click('nav button:has-text("Features")');
    await expect(page.locator('#features')).toBeInViewport();
    
    // Click Showcase link
    await page.click('nav button:has-text("Showcase")');
    await expect(page.locator('#showcase')).toBeInViewport();
    
    // Click Contact link
    await page.click('nav button:has-text("Contact")');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should display hero section with metrics', async ({ page }) => {
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();
    
    // Check metrics
    await expect(page.locator('text=Happy Users')).toBeVisible();
    await expect(page.locator('text=Downloads')).toBeVisible();
    await expect(page.locator('text=GitHub Stars')).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    await page.click('nav button:has-text("Features")');
    
    const features = page.locator('#features');
    await expect(features).toBeVisible();
    
    // Check feature cards
    await expect(page.locator('text=Lightning Fast')).toBeVisible();
    await expect(page.locator('text=Fully Responsive')).toBeVisible();
    await expect(page.locator('text=Accessible')).toBeVisible();
  });

  test('should display contact form', async ({ page }) => {
    await page.click('nav button:has-text("Contact")');
    
    const contactForm = page.locator('#contact form');
    await expect(contactForm).toBeVisible();
    
    // Check form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should validate contact form', async ({ page }) => {
    await page.click('nav button:has-text("Contact")');
    
    // Submit empty form
    await page.click('button[type="submit"]');
    
    // Check for validation errors (implementation specific)
    // This would need to be updated based on actual validation messages
  });

  test('should be responsive', async ({ page }) => {
    // Desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should have working language switcher', async ({ page }) => {
    // Check if language toggle exists
    const languageToggle = page.locator('button:has-text("English")');
    await expect(languageToggle).toBeVisible();
    
    // Click to open dropdown
    await languageToggle.click();
    
    // Check if Arabic option is available
    await expect(page.locator('button:has-text("العربية")')).toBeVisible();
  });
});