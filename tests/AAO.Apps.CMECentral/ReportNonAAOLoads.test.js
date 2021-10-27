const { test, expect } = require('@playwright/test');

test('test @smoke @regression', async ({ page, baseURL }) => {

  // Go to https://secure-dev.aao.org/aao/Login?returnurl=%2faao%2fcme-central
  await page.goto(baseURL + 'Login?returnurl=%2faao%2fcme-central');

  // Click text=Accept
  await page.click('text=Accept');

  // Click input[name="dnn$ctr1179$Login$txtEmail"]
  await page.click('input[name="dnn$ctr1179$Login$txtEmail"]');

  // Fill input[name="dnn$ctr1179$Login$txtEmail"]
  await page.fill('input[name="dnn$ctr1179$Login$txtEmail"]', 'aconnelly@aao.org');

  // Press Tab
  await page.press('input[name="dnn$ctr1179$Login$txtEmail"]', 'Tab');

  // Fill input[name="dnn$ctr1179$Login$txtPassword"]
  await page.fill('input[name="dnn$ctr1179$Login$txtPassword"]', 'password');

  // Press Tab
  await page.press('input[name="dnn$ctr1179$Login$txtPassword"]', 'Tab');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://secure-dev.aao.org/aao/cme-central#/' }*/),
    page.press('input:has-text("Log In")', 'Enter')
  ]);
  
  // Click text=Report Non-AAO Credits
  await page.click('text=Report Non-AAO Credits');
  expect(page.url()).toBe('https://secure-dev.aao.org/aao/cme-central#/reportNonAAOCredits');
});
