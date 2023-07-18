const { test, expect } = require("@playwright/test");

test("First test with browser context", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});

// If you just want default page without browser context
// test("First test without browser context", async ({ page }) => {
//   await page.goto("https://google.com");
// });
