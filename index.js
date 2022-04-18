const puppeteer = require('puppeteer');

async function start() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto('url'); // url do site

  await page.evaluate(() => {
    const radio = document.querySelector(
      'div[data-value="name"]', // nome do radio
    );
    radio.click();
  });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    const span = document.querySelector(
      'div.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd span span.NPEfkd.RveJvd.snByac', // botão de votar
    );
    span.click();
  });
  await page.waitForTimeout(2000);
  await browser.close();
}
let count = 0;
function vote() {
  start();
  count++;
  console.log('+1 VOTE');
  console.log(`Total: ${count}`);
}

setInterval(vote, 10000);
