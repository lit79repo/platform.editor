const {app, BrowserWindow} = require('electron');
const path = require("path");
let mainWindow;

let createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    title: "79",
    titleBarStyle: 'hiddenInset',
    transparent: true, 
    frame: false,
    webPreferences:{
        webSecurity: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, "frontend", "index.html"));
  mainWindow.on('closed',() => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed',() => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate',() => {
  if (mainWindow === null) {
    createWindow();
  }
});