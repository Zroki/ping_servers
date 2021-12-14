const ping = require('ping');

async function testHosts(host) {
	const test = await Promise((res) => {

		ping.sys.probe(host, (isAlive) => {
			res(isAlive);
		});

	});

	return test;
}

document.addEventListener('click', ({target}) => {

	if (target.closest('.start')) {
		const button = target.closest('.start');

		if (button.dataset.on === 'false') {
			button.dataset.on = 'true';
			button.innerText = 'Выключить';
		} else {
			button.dataset.on = 'false';
			button.innerText = 'Включить';
		}
	}

}, true);