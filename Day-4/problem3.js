/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let number = n;
  let makeArrayAndDivide = number.toString().split("").map(Number);

  let sum = 0;
  for (let i = 0; i < makeArrayAndDivide.length; i++) {
    let number = n;
    let makeArrayAndDivide = number.toString().split("").map(Number);
    sum = sum + makeArrayAndDivide[i] * makeArrayAndDivide[i];
    number = sum;
    if (sum === 1) {
      return true;
    }
  }

  return false;
};

console.log(isHappy(29));
