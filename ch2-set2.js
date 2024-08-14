function containsDuplicate(nums) {
    // Create an empty set to store unique elements
    const seen = new Set();

    // Iterate over each element in the array
    for (let num of nums) {
        // If the number is already in the set, it's a duplicate
        if (seen.has(num)) {
            return true;
        }
        // Otherwise, add the number to the set
        seen.add(num);
    }

    // If no duplicates were found, return false
    return false;
}

// Example usage
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, 2, 3, 4, 1];

console.log(containsDuplicate(nums1)); // Output: false
console.log(containsDuplicate(nums2)); // Output: true
