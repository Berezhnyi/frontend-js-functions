function min (array){
	if (array != undefined){
		let minimumnNumer = array[0];
		for (element of array) {
			if (typeof element === "number" && minimumnNumer > element) {
				minimumnNumer = element;
			}
		}
		return minimumnNumer;
	}
	return undefined;
}

export function max (array){
	if (array != undefined){
		let minimumnNumer = array[0];
		for (element of array) {
			if (typeof element === 'number' && minimumnNumer < element) {
				minimumnNumer = element;
			}
		}
		return minimumnNumer;
	}
	return undefined;
}
//  export function sum ()



let testerArray = [2,3,5,7,9,11,'d',13,6,1];
let testerArray2;
console.log(min(testerArray));
console.log(max(testerArray));
console.log(min(testerArray2));