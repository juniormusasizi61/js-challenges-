function singleNumber(nums) {
    let single = 0
    for (let num of nums) {
        single ^= num; // XOR the current number with the result
    }

    return single;
}

// Example usage
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];

console.log(singleNumber(nums1)); 
console.log(singleNumber(nums2)); 
