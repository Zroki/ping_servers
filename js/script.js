const ping = require('ping');

let interval;
let timer = 1;

async function testHosts(host) {
	const test = await new Promise((res) => {

		ping.sys.probe(host, (isAlive) => {
			res(isAlive);
		});

	});

	return test;
}

document.querySelector('#time').addEventListener('change', (e) => {
	document.querySelector('#time_value').innerText = e.target.value;
	timer = Number(e.target.value);
});

document.addEventListener('click', ({target}) => {
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
			}, timer);
		} else {
			button.dataset.on = 'false';
			button.innerText = 'Включить';
			hostValue.disabled = false;

			clearInterval(interval);

			setTimeout(() => {
				console.log(0);
				toggleIndicator('off');
			}, 1000)
		}
	}

}, true);
