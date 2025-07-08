const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  startUpload: (data) => ipcRenderer.invoke('start-upload', data)
});

window.addEventListener('DOMContentLoaded', () => {
  const selectFileBtn = document.getElementById('select-file');
  const videoPathInput = document.getElementById('video-path');
  const form = document.getElementById('upload-form');
  const status = document.getElementById('status');

  selectFileBtn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFileDialog();
    if (filePath) {
      videoPathInput.value = filePath;
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Uploading... Please wait.';
    const videoPath = videoPathInput.value;
    const titre = document.getElementById('titre').value;
    const description = document.getElementById('description').value;

    if (!videoPath || !titre) {
      status.textContent = 'Please select a video and enter a title.';
      return;
    }

    const result = await window.electronAPI.startUpload({ videoPath, titre, description });
    if (result.success) {
      status.textContent = '✅ Upload successful!';
    } else {
      status.textContent = '❌ Upload failed: ' + result.error;
    }
  });
});
