import { test, expect } from '@playwright/test';

test('check for console errors and capture screenshot', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.log('CONSOLE ERROR:', msg.text());
    }
  });

  page.on('pageerror', error => {
    consoleErrors.push(error.message);
    console.log('PAGE ERROR:', error.message);
  });

  await page.goto('http://localhost:3000');

  // Wait for some content to be visible
  try {
    await page.waitForSelector('h1', { timeout: 5000 });
  } catch (e) {
    console.log('H1 not found within 5s');
  }

  await page.screenshot({ path: 'verification_screenshot.png', fullPage: true });

  if (consoleErrors.length > 0) {
    console.log('Found ' + consoleErrors.length + ' errors');
  } else {
    console.log('No console errors found');
  }
});
