const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://web.gencat.cat/ca/inici");
  await page.click('a[href="http://agenda.cultura.gencat.cat"]');
  await browser.close();
})();
