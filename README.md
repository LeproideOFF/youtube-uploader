# 📺 Uploader YouTube Automatique (Electron + Playwright)

## 🇫🇷 Description
Cette application desktop (Electron) permet :
- de sélectionner un fichier vidéo local,
- saisir un titre et une description,
- et uploader automatiquement sur YouTube Studio via Playwright.

Par défaut, la vidéo est mise en **non répertoriée**.

---

## 🇬🇧 Description
This desktop app (Electron) lets you:
- select a local video file,
- enter a title & description,
- and automatically upload it to YouTube Studio via Playwright.

By default, the video is set as **unlisted**.

---

## 🗂 Table des matières
- 🇫🇷 Instructions d'installation
- 🇬🇧 Installation instructions
- ⚙️ Configuration du script
- 🚀 Utilisation
- 📝 Licence GPLv3

---

## 🇫🇷 Instructions d'installation

```bash
git clone https://github.com/tonpseudo/uploader-youtube-electron.git
cd uploader-youtube-electron
npm install
npx playwright install
npm start
🇬🇧 Installation instructions
bash
Copier
Modifier
git clone https://github.com/yourusername/uploader-youtube-electron.git
cd uploader-youtube-electron
npm install
npx playwright install
npm start
⚙️ Configuration du script
📂 Où modifier ton profil Chrome
Dans upload.js, change ces lignes pour pointer sur ton profil Chrome :


const browser = await chromium.launchPersistentContext(
  'C:/Users/zajon/Desktop/yt',  // <-- ton profil Chrome local
  {
    headless: false,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--disable-blink-features=AutomationControlled'],
  }
);
🔒 Comment mettre la vidéo en PUBLIC ou PRIVATE
Toujours dans upload.js, remplace :


await page.waitForSelector('tp-yt-paper-radio-button[name="UNLISTED"]', { timeout: 20000 });
await page.click('tp-yt-paper-radio-button[name="UNLISTED"]');
par :

"PUBLIC" pour une vidéo publique

"PRIVATE" pour une vidéo privée

🚀 Utilisation
Clique sur « Choisir fichier » pour sélectionner ta vidéo.

Saisis le titre et la description.

Clique sur « Uploader ».

Ton navigateur Chrome automatisé s'ouvre et upload la vidéo sur YouTube Studio.

📝 Licence - GPLv3

Copyright (C) 2025 

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.



---

## ✨ Notes finales

- ✅ Compatible Windows/macOS/Linux (il suffit d’adapter le chemin vers Chrome).
- ✅ Nécessite que tu sois déjà connecté à ton compte YouTube dans ton profil Chrome.
- ✅ Simple à forker et à améliorer (barre de progression, choix public/privé dans l'UI, etc).

---

🎉 **Bon upload !**
