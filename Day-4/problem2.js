/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort();
  console.log(arr);
  const newArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let consecutive = arr[i] - arr[i + 1];
    newArray.push(consecutive);
  }
  console.log(newArray);
  const newArrayFirstValue = newArray[0];
  let equalCount = 0;
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] === newArrayFirstValue) {
      equalCount++;
    }
  }
  if (equalCount === newArray.length) {
    return true;
  } else {
    return false;
  }
};

// const arr = [3, 5, 1];

const arr = [-68, -96, -12, -40, 16];
// console.log(arr.sort().reverse());
console.log(canMakeArithmeticProgression(arr));

/* let sajj = 4;
console.log(sajj);
let saad = sajj;
sajj = 5;

console.log(saad);
console.log(sajj); */
