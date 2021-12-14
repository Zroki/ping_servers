const Store = require('electron-store');

const store = new Store();

const imagePath = `${__dirname}/img`;

function toggleIndicator(flag) {

    if (flag) {
        store.get('test').setImage(`${imagePath}/active.png`);
    } else {
        store.get('test').setImage(`${imagePath}/disabled.png`);
    }
}

module.exports = {
    toggleIndicator,
    store
};