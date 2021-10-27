
const { test, expect } = require('@playwright/test');

test('test', async ({ page, baseURL }) => {

  // Go to https://secure-dev.aao.org/aao/Login?returnurl=%2faao
  await page.goto(baseURL + 'Login?returnurl=%2faao');

  // Click text=Accept
  await page.click('text=Accept');

  // Click input[name="dnn$ctr1179$Login$txtEmail  

  await page.click('input[name="dnn$ctr1179$Login$txtEmail"]');

  // Fill input[name="dnn$ctr1179$Login$txtEmail"]
  await page.fill('input[name="dnn$ctr1179$Login$txtEmail"]', 'jhammond@aao.org');

  // Press Tab
  await page.press('input[name="dnn$ctr1179$Login$txtEmail"]', 'Tab');

  // Fill input[name="dnn$ctr1179$Login$txtPassword"]
  await page.fill('input[name="dnn$ctr1179$Login$txtPassword"]', 'password');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://secure-dev.aao.org/aao#/ReturningUser' }*/),
    page.press('input[name="dnn$ctr1179$Login$txtPassword"]', 'Enter')
  ]);
  console.log('test completed with custom message.');

});