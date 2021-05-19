// function validAnagram(arr1, arr2){

//     if(arr1.length !== arr2.length) return false;

//     const objOne = {};

//     for(let val of arr1) objOne[val] = (objOne[val] || 0) +1;
//     for(let val of arr2) {
//         if (!objOne[val]) return false;
//         objOne[val]--;
//     }
//     return true;
// }

// console.log(validAnagram('aaz', 'zza'));

// console.log(validAnagram("awesome", "eawosme"));

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   var i = 0;

//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

// console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));

// function sameFrequency(num1, num2) {
//   let snum1 = num1.toString();
//   let snum2 = num2.toString();

//   if (snum1.length !== snum2.length) return false;

//   let countOne = {};
//   let countTwo = {};

//   for (let i = 0; snum1.length; i++) {
//     countOne[snum1[i]] = (countOne[snum1[i]] || 0) + 1;
//   }

//   for (let j = 0; snum1.length; j++) {
//     countTwo[snum2[j]] = (countTwo[snum2[j]] || 0) + 1;
//   }

//   for (let key in countOne) {
//     if (countOne[key] !== countTwo[key]) return false;
//   }

//   return true;

// }

// console.log(sameFrequency(111,111));

// function averagePair(arr, num) {
//   let left = 0;
//   let end = arr.length - 1;

//   while (left < end) {
//     let avg = (arr[left] + arr[end]) / 2;
//     if (avg === num) return true;
//     else if (avg < num) left++;
//     else end--;
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 3], 2.5));

// function twoSum(numbers, target) {

//   for (let i =0; i < numbers.length; i++){
//       for ( let j =i+1 ; j < numbers.length; j++ ){
//           if ( numbers[i] + numbers[j] === target){
//               return [ i,j ];
//           }
//       }

// }};

// console.log(twoSum([2,7,11,15], 17))

//Factorial Recursive

// function factorial(num) {
//   if (num === 0) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

//helper method recursion
// function outer(input) {
//   var outerScopedVariable = [];

//   function helped(helperInput) {
//     helperInput(helperInput--);
//   }
//   helper(input);
//   return outerScopedVariable;
// }

// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }
// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// PURE RECURSION

// function collectOddValues(arr) {
//   let newArr = [];

//   if (arr.length === 0) {
//     return newArr;
//   }

//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }

//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5]));

// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// }

// console.log(power(2, 3));

// function productOfArray(arr) {
//   if (arr.length === 0) {
//     return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }

// console.log(productOfArray([1, 2, 3]));

// function recursiveRange(number) {
//   if (number === 0) return 0;
//   return number + recursiveRange(number - 1);
// }

// console.log(recursiveRange(8));
