/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

    function findLargestElement(numbers) {
        let largestNum=numbers[0];


        
        for (var i = 0; i < numbers.length; i++) {
            if(numbers[i]>largestNum){
                largestNum= numbers[i]
            }
        }
        console.log(largestNum);
        return largestNum
    }
   let num=[3, 7, 2.3, 9.3, 1]
findLargestElement(num)
module.exports = findLargestElement;