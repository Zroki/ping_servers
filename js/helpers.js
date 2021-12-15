const Store = require('electron-store');
const { ipcRenderer } = require('electron');

const store = new Store();

function toggleIndicator(flag) {
    if (flag) {
        ipcRenderer.send('message', {
            image: `active.png`,
        });
    }
    if (flag === false) {
        ipcRenderer.send('message', {
            image: `disabled.png`,
        });
    }
    if (flag === 'off') {
        console.log(1);
        ipcRenderer.send('message', {
            image: `off.png`,
        });
    }
}

module.exports = {
    toggleIndicator,
    store
};