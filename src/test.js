// console.log('test');
// let message = 'test2';

// console.log(message);

// console.log('testamen');

// console.log(message);

function average (array) {
	let result;
	let numberAmount = array.length;
	let sum = 0;
	let number;

	for (number of array) {
		sum += number;
	}
	result = sum / numberAmount;

	return result;
}

let array = [35, 7, 687, 56, 89];
let result = average(array);

console.log(result);

function sumTillNumber (endNumber) {
	let counter = 0;
	let resultOfSum = 0;

	while (counter < endNumber + 1) {
		resultOfSum += counter;
		counter++;
	}
	return resultOfSum;
}

function sumTillNumberRecursionMethod (endNumber) {
	// console.log(endNumber);
	if (endNumber === 1) {
		return 1;
	}

	return endNumber + sumTillNumberRecursionMethod(endNumber - 1);

}

// оптимизация хвостовой рекурсии Экмоскрипт 6 попробовать.

let calculateThis = 10;
let resultSummingTillNumber = sumTillNumber(calculateThis);

console.log(resultSummingTillNumber);

resultSummingTillNumber = sumTillNumberRecursionMethod(calculateThis);
console.log(resultSummingTillNumber);