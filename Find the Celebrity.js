// Sure, I can provide the time and space complexity analysis for this solution:

// Time Complexity: O(n)

// In the first pass, we iterate through n-1 people, so the time complexity of the first pass is O(n). In the second pass, we iterate through n people, so the time complexity of the second pass is also O(n). Therefore, the overall time complexity of this solution is O(n).

// Space Complexity: O(1)

// This solution only uses a few variables, such as candidate and i, so the space complexity is O(1). This means that the amount of memory used by this solution does not depend on the size of the input.

const knows = (a, b) => {
  // Return true if a knows b, false otherwise.
};

var solution = function (knows) {
	/*
	@param {integer} n total peopel
	@return {ineter} The celibrity
	*/

	return function (n) {
		let candidate = 0;

		// first pass find the candidates
		for (let i = 1; i < n; i++) {
			if (knows(candidate, i)) {
				candidate = i;
			}
		}

		// validate the candidates
		for (let i = 0; i < n; i++) {
			if (
				i !== candidate &&
				(knows(candidate, i) || !knows(i, candidate))
			) {
				return -1;
			}
		}
		return candidate;
	};
};

const findCelib = solution(knows);
const n = 4; // Total number of people
const celebrity = findCelib(n);

console.log(celebrity)