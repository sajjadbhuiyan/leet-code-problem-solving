/**
 * @param {number[]} arr
 * @return {number}
 */

var makeSubarrays = function (oddLength) {
  console.log(oddLength);
};

var sumOddLengthSubarrays = function (arr) {
  const givenArrayLength = arr.length;
  for (let i = 0; i < givenArrayLength.length; i++) {
    if (givenArrayLength[i] % 2 !== 0) {
      makeSubarrays(givenArrayLength[i]);
    }
  }
};

const arr = [1, 4, 2, 5, 3];
sumOddLengthSubarrays(arr);
