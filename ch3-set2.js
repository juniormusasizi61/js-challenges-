function majorityElement(nums) {
    // Initialize a candidate for majority element and a counter
    let candidate = null;
    let count = 0;

    // First pass to find the candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        // Increment or decrement the count
        count += (num === candidate) ? 1 : -1;
    }

    // Since the majority element is guaranteed to exist, we return the candidate
    return candidate;
}

// Example usage
const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums1)); // Output: 3
console.log(majorityElement(nums2)); // Output: 2
