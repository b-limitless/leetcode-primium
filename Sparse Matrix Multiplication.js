// Time time will be O(n * m * p)
// Space will be O(m * n)
function SparseMatrixMultiplication(a, b) {
	const result = [];

	console.log("b[0]", b[0])

	// Iterate over 
	for(let i = 0; i < a.length; i++) {
		const row = [];

		// Iterate over each column of the secound matrix
		for(let j = 0; j < b[0].length; j++) {
			let sum = 0;

			// Iterate over each element in the row of the first matrix 
			// And the column of the secound matrix 
			for(let k = 0; k < b.length; k++) {
				if(a[i][k] !== 0 && b[k][j] !== 0) {
					sum += a[i][k] * b[k][j];
				}
			}
			row.push(sum)
		}
		result.push(row)
	}

	console.log("result", result)
}

const a = [
	[1, 0, 0],
	[-1, 0, 3],
];

const b = [
	[7, 0, 0],
	[0, 0, 0],
	[0, 0, 1],
];

console.log(SparseMatrixMultiplication(a,b))