import { max } from '../../src/index';

describe('The function `max`', function () {
	let array;
	let originArray;
	let result;

	beforeEach(function () {
		array = undefined;
		result = undefined;
		originArray = undefined;
	});

	it('is defined', function () {
		expect(max).toBeDefined();
	});

	describe('correctly finds maximal values in arrays of numbers', function () {
		it('[10, 45, 55, 100, 66, 4, 99]', function () {
			array = [10, 45, 55, 100, 66, 4, 99];
			result = max(array);
			expect(result).toBe(100);
		});

		it('[10.5, 45, 55.2, 100.6, 66, 99]', function () {
			array = [10.5, 45, 55.2, 100.6, 66, 99];
			result = max(array);
			expect(result).toBe(100.6);
		});

		it('[0, 45, 55.2, 100, 66, -1]', function () {
			array = [0, 45, 55.2, 100, 66, -1];
			result = max(array);
			expect(result).toBe(100);
		});

		it('[-45, 0, -100, -66, -1]', function () {
			array = [-45, 0, -100, -66, -1];
			result = max(array);
			expect(result).toBe(0);
		});
	});

	describe('correctly finds maximal values in arrays of different types', function () {
		it('[10, 45, , , 66, 4, 99]', function () {
			array = [10, 45];
			array[4] = 66;
			array[5] = 4;
			array[6] = 99;
			result = max(array);
			expect(result).toBe(99);
		});

		it('[null, false, "4", undefined, true, 99, 6]', function () {
			array = [null, false, '4', undefined, true, 99];
			result = max(array);
			expect(result).toBe(99);
		});

		it('[false, "10000", undefined, true, 99, 524]', function () {
			array = [null, false, '10000', undefined, true, 99, 524];
			result = max(array);
			expect(result).toBe(524);
		});
	});

	describe('correctly finds maximal values in arrays of not numbers', function () {
		it('[true, false]', function () {
			array = [true, false];
			result = max(array);
			expect(result).toBeUndefined();
		});

		it('[undefined, "test", " ", null, {}, []]', function () {
			array = [undefined, 'test', ' ', null, {}, []];
			result = max(array);
			expect(result).toBeUndefined();
		});
	});

	it('doesn\'t mutate passed array', function () {
		array = [10, 45, 55, 100, 66, 4, 99];
		originArray = array.concat();
		result = max(array);
		expect(array).toEqual(originArray);
	});

	it('returns `undefined` in an empty array', function () {
		array = [];
		result = max(array);
		expect(result).toBeUndefined();
	});

	it('returns `undefined` if an array is not defined', function () {
		result = max();
		expect(result).toBeUndefined();
	});
});