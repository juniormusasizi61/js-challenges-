function singleNumber(nums) {
    let single = 0;

    // XOR all the numbers in the array
    for (let num of nums) {
        single ^= num; // XOR the current number with the result
    }

    return single; // The result will be the single number
}

// Example usage
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];

console.log(singleNumber(nums1)); // Output: 1
console.log(singleNumber(nums2)); // Output: 4
