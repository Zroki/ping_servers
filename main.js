const path = require('path');
const url = require('url');
const { app, BrowserWindow, Tray, ipcMain } = require('electron');
// const { test } = require('./js/script');
let { store } = require('./js/helpers');
// const store = require('store');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 150,
    resizable: false,
    icon: __dirname + '/img/icon.jpg',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/html/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  win.on('close', () => {
    win = null;
  });

  win.setMenuBarVisibility(false);

  let tray = new Tray(`${ __dirname }/img/off.png`);

  ipcMain.on('message', (event, data) => {
    tray.setImage(`${`${ __dirname }/img/`}${data.image}`);
  });

  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show();
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
