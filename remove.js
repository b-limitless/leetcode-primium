function maxSubArraySize(nums, k) {
	const sumMapKeyIndex = new Map();
	let sum = 0;
	let maxSize = 0;

	for(let i = 0; i < nums.length; i++) {
		sum += nums[i];

		if(sum === k) {
			maxSize = i + 1;
		} else if(sumMapKeyIndex.has(sum - k)) {
			maxSize = Math.max(maxSize, i - sumMapKeyIndex.get(sum - k));
		}

		if(!sumMapKeyIndex.has(sum)) {
			sumMapKeyIndex.set(sum, i);
		}
	}

	return maxSize;


}

const nums = [1, -1, 5, -2, 3];
const k = 3;// 4 Ans [1, -1, 5, -2]

console.log(maxSubArraySize(nums, k))