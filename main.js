var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

global.opensettings = function(){
  var settingsWindow = new BrowserWindow({});
  settingsWindow.loadUrl('file://' + __dirname + '/taskbar/settings.html');
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('new-window', function() {
    app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.

  var electronScreen = require('screen');;
  var size = electronScreen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({x:0, y:0, type: "dock", resizeable: "false", skipTaskbar: "true", width: size.width, height: 64, frame:false});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/taskbar/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  mainWindow.webContents.on('new-window', function(event, url, frameName, disposition, options){
    // console.log('new window', event, url, frameName, disposition, options);
    // options.skipTaskbar = 'false';
    options.y = 24;
    options.resizeable = true;
    options.frame = true;
    options.width = size.width;
    options.height = size.height;
    // url = 'file://' + __dirname + '/taskbar/index.html';
    // options.type = 'desktop';
    console.log(event.sender);
    //event.sender.loadUrl('file://' + __dirname + '/taskbar/settings.html');
    // options.type = 'desktop';

    // { x: 0,
    //     y: 0,
    //     type: 'dock',
    //     resizeable: 'false',
    //     skipTaskbar: 'true',
    //     width: 1280,
    //     height: 64,
    //     frame: false }
  });
});
