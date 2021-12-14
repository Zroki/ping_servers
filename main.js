const path = require('path');
const url = require('url');
const { app, BrowserWindow, Tray } = require('electron');
// const { test } = require('./js/script');
let { store } = require('./js/helpers');
// const store = require('store');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 500,
    resizable: false,
    icon: __dirname + '/img/icon.jpg',
    webPreferences: {
      nodeIntegration: true,
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

  // const tray = new Tray(__dirname + '/img/active.png');
  const qqq = new Tray(`${__dirname}/img/disabled.png`);
  // console.log(imagePath);
  console.log(qqq);

  // setTimeout(() => {
  //   qqq.setImage(__dirname + '/img/active.png')
  // }, 5000)

  store.set('test', qqq);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
