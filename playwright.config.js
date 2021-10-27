// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  globalSetup: require.resolve('./global-setup'),
  use: {   
    baseURL: 'https://secure-dev.aao.org/aao/', 
    headless: false,
    browserName: 'chromium',
    viewport: { width: 1200, height: 750 },
  },
}


module.exports = config;

