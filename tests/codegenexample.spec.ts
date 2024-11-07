import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('start test');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('continue test');
  await page.locator('html').click();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('finish test');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.locator('li').filter({ hasText: 'start test' }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.locator('li').filter({ hasText: 'continue test' }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});