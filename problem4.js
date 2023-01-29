/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  /* const makeArray = n.toString().split("").map(Number);
  let sum = 0;
  let muliplay = 1;
  for (let i = 0; i < makeArray.length; i++) {
    sum += makeArray[i];
    muliplay *= makeArray[i];
  }
  return muliplay - sum; */

  let mainNumber = n;

  let sum = 0;
  let muliplay = 1;
  while (mainNumber > 0) {
    const digit = mainNumber % 10;
    sum += digit;
    muliplay *= digit;
    mainNumber = ~~(mainNumber / 10);
  }
  return muliplay - sum;
};

console.log(subtractProductAndSum(4421));
