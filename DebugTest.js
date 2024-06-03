//Write a JavaScript function to get the average of a given array.
function findAverage(numbers) 
{
 //Calculate the sum of all numbers in the array
     
       let sum = 0;
       for (let i = 0; i < numbers.length; i++) 
        {
           sum += numbers[i];
         }

//   Calculate the average by dividing the sum by the number of elements
        return sum / numbers.length;
}
//Call the function with an array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log(findAverage(numbers)); // Output: 3
