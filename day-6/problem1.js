/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  if (!arr.length) return 0;
  let sum = 0;
  const findSum = (first, last) => {
    let sum = 0;
    for (let i = first; i <= last; i++) sum += arr[i];
    // [1] = 1 |-> [1+4+2] = 7 |-> [1+4+2+5+3] = 15
    // [4] = 4 |-> [4+2+5] = 11
    // [2] = 2 |-> [2+5+3] = 10
    // [5] = 5
    // [3] = 3
    return sum;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j + i < arr.length; j = j + 2) sum += findSum(i, i + j);
    // [0+1] = 1 |-> [1+7] = 8 |-> [8+15] = 23
    // [23+4] = 27 |-> [27+11] = 38
    // [38+2] = 40 |-> [40+10] = 50
    // [50+5] = 55
    // [55+3] = 58
  }
  return sum;
};

const arr = [1, 4, 2, 5, 3];
sumOddLengthSubarrays(arr);

// j+i = 1
// j+i = 3
// j+i = 5

// j+i = 2
