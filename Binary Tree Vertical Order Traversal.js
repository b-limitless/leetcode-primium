function maxSubArraySize(nums, k) {
	const sumMap = new Map();

	let sum = 0;
	let maxSum = 0;

	for(let i = 0; i < nums.length; i++) {
		sum += nums[i];

		if(sum === k) {
			maxSum = i + 1;
		} else if(sumMap.has(sum -k)) {
			maxSum = Math.max(maxSum, sumMap.get(sum - k));
		}

		if(!sumMap.has(sum)) {
			sumMap.set(sum, i);
		}
	}
	return maxSum;
}



const nums = [1, -1, 5, -2, 3];
const k = 3;
console.log(maxSubArraySize(nums, k))