const ping = require('ping');
// const { store } = require('../js/helpers');

let interval;

async function testHosts(host) {
	const test = await new Promise((res) => {

		ping.sys.probe(host, (isAlive) => {
			res(isAlive);
		});

	});

	return test;
}

document.addEventListener('click', ({target}) => {
	console.log(store.get('test'));
	if (target.closest('.start')) {
		const button = target.closest('.start');
		const hostValue = document.querySelector('#host');

		if (button.dataset.on === 'false') {
			button.dataset.on = 'true';
			button.innerText = 'Выключить';
			hostValue.disabled = true;

			interval = setInterval(async () => {
				const test = await testHosts(hostValue.value);
				toggleIndicator(test);
			}, 2000);
		} else {
			button.dataset.on = 'false';
			button.innerText = 'Включить';
			hostValue.disabled = false;

			clearInterval(interval);
		}
	}

}, true);
