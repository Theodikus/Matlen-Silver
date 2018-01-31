





//Here's a way to accomplish the desired results using recursion and array manipulation. In a live scenario, I'd use filtering.

function oddOnlyRecursive(arr){
	function getOddElements(targetArray, newArray = []){

		const currentNumber = targetArray.pop();
		if(currentNumber % 2 !==0){
			newArray.push(currentNumber);
		}

		return targetArray.length ? getOddElements(targetArray, newArray) : newArray;
	}

	return getOddElements(arr);
	//I would write "return getOddElements(arr).sort();" but I don't know if using internal libraries would disqualify me
}


/*
 * I was unable to determine whether the internal implementation of JavaScript uses loops or some kind of bit manipulation to achieve the results, 
 * but I figured I'd include filtering here, just so you know I know it exists.
 */

function onlyOddFilter(arr){
	return arr.filter(num => num % 2 !==0);
}


