// export function min (array) {
// 	if (typeof array !== 'undefined') {
// 		let minimumnNumer = array[0];
// 		let element;

// 		for (element of array) {
// 			if (typeof element === 'number' && minimumnNumer > element) {
// 				minimumnNumer = element;
// 			}
// 		}
// 		return minimumnNumer;
// 	}
// }

// export function max (array) {
// 	if (typeof array !== 'undefined') {
// 		let minimumnNumer = array[0];
// 		let element;

// 		for (element of array) {
// 			if (typeof element === 'number' && minimumnNumer < element) {
// 				minimumnNumer = element;
// 			}
// 		}
// 		return minimumnNumer;
// 	}
// 	return undefined;
// }

function sum () {
	if (typeof arguments !== 'undefined') {
		arguments.reduce = [].reduce;
		return arguments.reduce(function (a, b) {
			let numerator = function(elementInt) {
				let elementInt;
				if (typeOf elementInt === 'number') {
					return elementInt;
				}
				return 0;
			};

			return (numerator(a)+numerator(b));

			// if (typeof a === 'number') {
			// 	if (typeof b === 'number') {
			// 		return a + b;
			// 	}
			// }
		});
	}
}

console.log(1);

// function test (arrs) {
// 	console.log(arguments, arrs);
// }


// let testerArray = [2, 3, 5, 7, 9, 11, 'd', 13, 6, 1];
// let testerArray2;

console.log(sum('a', 5, [1, 5, 8]));

// console.log(min(testerArray));
// console.log(max(testerArray));
// console.log(min(testerArray2));