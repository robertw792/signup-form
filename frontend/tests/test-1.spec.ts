import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('robert');
  await page.getByRole('button', { name: 'CLAIM YOUR FREE TRIAL' }).click();
});