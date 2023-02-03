/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  if (!arr.length) return 0;
  let sum = 0;

  const makeSubarraysAndThierSum = (first, last) => {
    let sum = 0;
    for (let i = first; i <= last; i++) {
      sum += arr[i];
    }
    return sum;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j + i < arr.length; j = j + 2) {
      sum += makeSubarraysAndThierSum(i, j + i);
    }
  }

  return sum;
};

const arr = [10, 11, 12];
console.log(sumOddLengthSubarrays(arr));
