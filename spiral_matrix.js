function createBaseMatrix(n) {
	let matxaArray = [];
	for(let i = 0; i < n; i++) { matxaArray.push([]) }
	return matxaArray;
}

function spiralMatrix(n) {
	let baseArray = createBaseMatrix(n);
	let rowStart = 0,
		rowEnd = n - 1,
		colStart = 0,
		colEnd = n - 1,
		value = 1;
  
	while(rowStart <= rowEnd && colStart <= colEnd) {
		for(let i = colStart; i <= colEnd; i++) {
			baseArray[rowStart][i] = value
			value++;
		}
		rowStart++;

		for(let i = rowStart; i <= rowEnd; i++) {
			baseArray[i][colEnd] = value
			value++;
		}
		colEnd--;

		for(let i = colEnd; i >= colStart; i--) {
			baseArray[rowEnd][i] = value
			value++;
		}
		rowEnd--;

		for(let i = rowEnd; i >= rowStart; i--) {
			baseArray[i][colStart] = value
			value++;
		}
		colStart++;
	}
	return baseArray;
}



console.log(spiralMatrix(3));
console.log(spiralMatrix(5));
console.log(spiralMatrix(15));
