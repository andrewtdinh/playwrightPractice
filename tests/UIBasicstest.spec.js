const { test } = require('@playwright/test');

test('First test with browser context', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  page.goto('https://google.com');

});