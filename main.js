const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

log.transports.file.resolvePath = () => path.join('C:\Users\sansk\Downloads\auto-update-electron', '/logs/main.log');

log.log("application version " + app.getVersion());
log.info('hello, log');
log.warn('some problem appears');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 300, height: 400 });
  console.log(path.join(__dirname, 'index.html'));
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.on('ready', () => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();   
});


autoUpdater.on('checking-for-update', () => {
    log.info('checking-for-update');

    });
  
autoUpdater.on('update-available', () => {
  log.info('update-available');     
    });

autoUpdater.on('update-downloaded', (info) => {
    log.info('update-downloaded');
     });

autoUpdater.on('download-progress', (progress) => {
  log.info('download-progress');
  log.info(progress);   
    });



app.on('ready', () => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});
