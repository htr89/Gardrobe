const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;


let mainWindow;


app.on('ready', function(){
	mainWindow = new BrowserWindow({});
    mainWindow.loadURl(url.format({
        pathname: path.join(__dirname, 'gardrobe.html'),
        protocol: 'file:',
        slashes: true
    })); 
});