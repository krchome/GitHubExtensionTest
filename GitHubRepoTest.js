function findMedian(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);

    // Check if the array has an odd or even length
    if (numbers.length % 2 === 1) {
        // If the length is odd, return the middle element
        return numbers[Math.floor(numbers.length / 2)];
    } else {
        // If the length is even, return the average of the two middle elements
        const middleIndex = numbers.length / 2;
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;

    }
}
//Call the function with an array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log(findMedian(numbers)); // Output: 3
//Call the function with an array of numbers
const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(findMedian(numbers2)); // Output: 3.5