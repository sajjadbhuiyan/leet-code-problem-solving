/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/* var hammingWeight = function (n) {
  if (n >= 0) {
    let loopCount = n;
    let count = 0;
    while (loopCount > 0) {
      if (loopCount % 10 === 1) {
        count++;
      }
      loopCount = ~~(loopCount / 10);
    }
    return count;
  }
}; */

var hammingWeight = function (n) {
  const str = `${n}`;
  const numToString = str.split("");
  console.log(numToString);
};

console.log(hammingWeight("11111111111111111111111111111101"));
