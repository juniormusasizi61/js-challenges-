function Arrays(arr) {
    // Initialize an object to hold the sorted arrays
    const result = {
        evens: [],  // Array to hold sorted even numbers
        odds: [],   // Array to hold sorted odd numbers
        chars: []   // Array to hold sorted single-character strings
    };

    // Iterate over each element in the input array
    for (let item of arr) {
        // Check if the item is a number
        if (typeof item === 'number') {
            // If the number is even, push it to the evens array
            if (item % 2 === 0) {
                result.evens.push(item);
            } else {
                // If the number is odd, push it to the odds array
                result.odds.push(item);
            }
        } 
        // Check if the item is a single-character string
        else if (typeof item === 'string' && item.length === 1) {
            // If it's a single character, push it to the chars array
            result.chars.push(item);
        }
    }

    // Function to perform bubble sort on an array
    function bubbleSort(arr) {
        let n = arr.length;  // Get the length of the array
        // Outer loop for each element in the array
        for (let i = 0; i < n - 1; i++) {
            // Inner loop to compare adjacent elements
            for (let j = 0; j < n - i - 1; j++) {
                // If the current element is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Sort the evens array using bubble sort
    bubbleSort(result.evens);
    // Sort the odds array using bubble sort
    bubbleSort(result.odds);
    // Sort the chars array using bubble sort
    bubbleSort(result.chars);

    // Return the final object containing the sorted arrays
    return result;
}

const array = [7, 'b', 2, 9.5, 4, 'a', 'c', 3, 8, 6];

console.log(Arrays(array));
