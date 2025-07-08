const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const upload = require('./upload');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('open-file-dialog', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Vidéos', extensions: ['mp4', 'mkv', 'avi', 'mov'] }],
  });
  if (result.canceled) return null;
  return result.filePaths[0];
});

ipcMain.handle('start-upload', async (event, { videoPath, titre, description }) => {
  try {
    await upload(videoPath, titre, description);
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
});
