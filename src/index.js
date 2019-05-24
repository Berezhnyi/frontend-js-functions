export function min (array) {
	if (typeof array !== 'undefined') {
		let minimumnNumer;
		let element;

		for (element of array) {
			if (typeof element === 'number') {
				minimumnNumer = element;
				break;
			}
		}
		for (element of array) {
			if (typeof element === 'number' && minimumnNumer > element) {
				minimumnNumer = element;
			}
		}
		return minimumnNumer;
	}
}

export function max (array) {
	if (typeof array !== 'undefined') {
		let maximumNumer;
		let element;

		for (element of array) {
			if (typeof element === 'number') {
				maximumNumer = element;
				break;
			}
		}

		for (element of array) {
			if (typeof element === 'number' && maximumNumer < element) {
				maximumNumer = element;
			}
		}
		return maximumNumer;
	}

	// return undefined;
}

function returnNumber (intChecker) {
	if (typeof intChecker === 'number') {
		return intChecker;
	}
	return 0;
}

export function sum () {
	if (typeof arguments !== 'undefined') {
		let args = Array.from(arguments);
		let result = 0;
		let element;

		for (element of args) {
			result += returnNumber(element);
		}
		return result;
	}
	return undefined;
}

console.log(1);

// function test (arrs) {
// 	console.log(arguments, arrs);
// }


// let testerArray = [2, 3, 5, 7, 9, 11, 'd', 13, 6, 1];
// let testerArray2;

// console.log(sum('a', 5, [1, 5, 8]));

// console.log(min(testerArray));
// console.log(max(testerArray));
// console.log(min(testerArray2));