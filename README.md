🇫🇷 Uploader YouTube Automatique (Electron + Playwright)
🎯 Description
Cette application Electron te permet de :

Sélectionner un fichier vidéo local.

Entrer un titre et une description.

Lancer un upload automatique sur YouTube Studio via Playwright.

Par défaut, la vidéo sera mise en non répertoriée.

🛠 Installation
bash
Copier
Modifier
git clone https://github.com/tonpseudo/uploader-youtube-electron.git
cd uploader-youtube-electron
npm install
npx playwright install
npm start
⚙️ Configuration
📂 Lignes à modifier dans upload.js :
javascript
Copier
Modifier
// Ligne pour ton profil Chrome local
const browser = await chromium.launchPersistentContext(
  'C:/Users/zajon/Desktop/yt',  // <-- ton répertoire Chrome
  {
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--disable-blink-features=AutomationControlled']
  }
);
🔒 Ligne pour la visibilité de la vidéo :
javascript
Copier
Modifier
await page.waitForSelector('tp-yt-paper-radio-button[name="UNLISTED"]', { timeout: 20000 });
await page.click('tp-yt-paper-radio-button[name="UNLISTED"]');
👉 Tu peux remplacer "UNLISTED" par :

"PUBLIC" pour la publier en public

"PRIVATE" pour la mettre en privée

✅ Utilisation
Clique sur Choisir fichier et sélectionne ta vidéo.

Remplis le titre et la description.

Clique sur Uploader : l’upload est fait automatiquement dans ton navigateur contrôlé par Playwright.

🚀 Roadmap
✅ Version avec titre + description + choix fichier

🚀 Choix direct de « Public / Privé / Non répertorié » dans l’interface

🚀 Progress bar & retour du lien de la vidéo

🇬🇧 YouTube Auto Uploader (Electron + Playwright)
🎯 Description
This Electron app lets you:

Select a local video file.

Enter a title and description.

Automatically upload it to YouTube Studio via Playwright.

By default, videos are uploaded as unlisted.

🛠 Installation
bash
Copier
Modifier
git clone https://github.com/youruser/uploader-youtube-electron.git
cd uploader-youtube-electron
npm install
npx playwright install
npm start
⚙️ Configuration
📂 Lines to modify in upload.js:
javascript
Copier
Modifier
// Line for your local Chrome profile
const browser = await chromium.launchPersistentContext(
  'C:/Users/zajon/Desktop/yt',  // <-- your Chrome user data dir
  {
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--disable-blink-features=AutomationControlled']
  }
);
🔒 Line for video visibility:
javascript
Copier
Modifier
await page.waitForSelector('tp-yt-paper-radio-button[name="UNLISTED"]', { timeout: 20000 });
await page.click('tp-yt-paper-radio-button[name="UNLISTED"]');
👉 Replace "UNLISTED" with:

"PUBLIC" to publish publicly

"PRIVATE" for private videos

✅ Usage
Click Choose file and select your video.

Enter title & description.

Click Upload. The upload will be done in your controlled Chrome browser.

📝 License
GPL v3
