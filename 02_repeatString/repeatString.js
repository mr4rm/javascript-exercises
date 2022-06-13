const repeatString = function(string, number) {
	let answer = '';
	if (number < 0) {
		return ('ERROR');
	}
		else
			for (number; number > 0; number--) {
			answer += `${string}`;
		}
			return (answer);
	};

/* repeatString('hey', (Math.floor(Math.random * 1000))); */
const number = Math.floor(Math.random() * 1000);
repeatString('', number);
// Do not edit below this line
module.exports = repeatString;
