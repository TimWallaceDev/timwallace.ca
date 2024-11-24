import { test, expect } from '@playwright/test'

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test('webshop homepage', async ({ page }) => {
  const response = await page.goto('https://timwallace.ca')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Tim Wallace/)
  await page.screenshot({ path: 'homepage.jpg' })
})
