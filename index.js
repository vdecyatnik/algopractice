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

function averagePair(arr, target) {
  let sortedArray = arr.sort();

  let left = 0;
  let next = sortedArray.length -1;

  for (var i = 0; i < sortedArray.length; i++) {
    let average = arr[left] + arr[next] / 2;
    if (average === target) {
      return true;
    }
    else return false;
  }
}

console.log(averagePair([-1,0,3,4,5,6], 4.1));
