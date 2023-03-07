// Yes, I can provide a solution for Maximum Size Subarray Sum Equals k problem in JavaScript with linear complexity.

// The problem can be solved by using the hash map data structure. The basic idea is to keep track of the running sum of the array elements as we traverse the array from left to right. At each index, we calculate the running sum by adding the current element to the previous running sum. If the running sum at index j is equal to the target sum k, we update the maximum subarray size to j+1. If the running sum at index j-k is present in the hash map, then we update the maximum subarray size to j-hashmap[running_sum-k]. Otherwise, we add the running sum to the hash map with its index j.

// Here's the code in JavaScript:

//https://www.lintcode.com/problem/maximum-size-subarray-sum-equals-k/description


/*
Create a hash map to store the sum of elements up to each index in the array and their index as key-value pairs.
Initialize a variable maxSize to 0 to store the maximum size of the subarray.
Initialize a variable sum to 0 to store the sum of elements up to the current index.
Loop through each element in the array:
Add the current element to the sum.
Check if the sum - k exists in the hash map. If it does, then there is a subarray with sum k that ends at the current index. Update maxSize with the maximum of its current value and the difference between the current index and the index in the hash map for sum - k.
If the sum does not exist in the hash map, add it with the current index as value.
Return maxSize.
*/
function maxSubArraySize(arr, k) {
  const sumMap = new Map();
  let sum = 0;
  let maxSize = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
    if (sum === k) {
      maxSize = i + 1;
    } else if (sumMap.has(sum - k)) {
      console.log("sum - k", sum , k)
      console.log("ran")
      maxSize = Math.max(maxSize, i - sumMap.get(sum - k));
    }
    
    if (!sumMap.has(sum)) {
      sumMap.set(sum, i);
    }
  }
  
  return maxSize;
}
//In this code, we use a Map to store the sum of elements up to each index in the array and their index as key-value pairs. We also initialize sum to 0 and maxSize to 0. We loop through each element in the array, adding the current element to sum and checking if sum equals k. If it does, we update maxSize with the current index plus one, since the subarray includes all elements up to this index. If sum - k exists in the hash map, then there is a subarray with sum k that ends at the current index, and we update maxSize with the maximum of its current value and the difference between the current index and the index in the hash map for sum - k. Finally, if sum does not exist in the hash map, we add it with the current index as its value. The function returns maxSize at the end.







const nums = [1, -1, 5, -2, 3];
const k = 3;

console.log(maxSubArraySize(nums, k))