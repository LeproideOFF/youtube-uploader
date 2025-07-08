const { chromium } = require('playwright');
const path = require('path');

module.exports = async function upload(videoPath, titre, description) {
  const browser = await chromium.launchPersistentContext(
    'C:/Users/zajon/Desktop/yt', // adapte ce chemin à ton profil Chrome
    {
      headless: false,
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // chemin Chrome
      args: ['--disable-blink-features=AutomationControlled'],
    }
  );

  const page = await browser.newPage();
  await page.goto('https://studio.youtube.com');
  await page.goto('https://www.youtube.com/upload');

  await page.waitForSelector('input[type="file"]', { timeout: 30000, state: 'attached' });
  await page.setInputFiles('input[type="file"]', path.resolve(videoPath));

  await page.waitForSelector('#title-textarea', { timeout: 60000 });
  await page.evaluate((text) => {
    const titleComponent = document.querySelector('#title-textarea');
    const editable = titleComponent.shadowRoot
      ? titleComponent.shadowRoot.querySelector('textarea, div[contenteditable="true"]')
      : titleComponent.querySelector('textarea, div[contenteditable="true"]');
    if (editable) {
      editable.focus();
      editable.value = text;
      editable.innerText = text;
      editable.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }, titre);

  await page.evaluate((text) => {
    const descComponent = document.querySelector('#description-textarea');
    const editable = descComponent.shadowRoot
      ? descComponent.shadowRoot.querySelector('textarea, div[contenteditable="true"]')
      : descComponent.querySelector('textarea, div[contenteditable="true"]');
    if (editable) {
      editable.focus();
      editable.value = text;
      editable.innerText = text;
      editable.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }, description);

  for (let i = 0; i < 3; i++) {
    await page.waitForSelector('ytcp-button#next-button', { timeout: 20000 });
    await page.click('ytcp-button#next-button');
    await page.waitForTimeout(1000);
  }

  await page.waitForSelector('tp-yt-paper-radio-button[name="UNLISTED"]', { timeout: 20000 });
  await page.click('tp-yt-paper-radio-button[name="UNLISTED"]');

  await page.waitForSelector('ytcp-button#done-button', { timeout: 20000 });
  await page.click('ytcp-button#done-button');

  await page.waitForTimeout(5000);
  await browser.close();
};
