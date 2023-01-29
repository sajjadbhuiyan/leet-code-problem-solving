/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

/* var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (!(i % 2 === 0)) {
      count++;
    }
  }
  return count;
}; */

/* var countOdds = function (low, high) {
  return Math.floor((high - low) / 2) + (low % 2 || high % 2 ? 1 : 0);
};

 */

/* const isOdd = (num) => num % 2 === 1;

const addCounts = (low, high) => {
  const bothOdd = isOdd(low) && isOdd(high);
  const oneOdd = isOdd(low) || isOdd(high);
  if (bothOdd) {
    return 2;
  } else if (oneOdd) {
    return 1;
  } else {
    return 0;
  }
};

var countOdds = function (low, high) {
  const diff = high - low;
  const counts = (diff + addCounts(low, high)) / 2;
  return counts;
};

console.log(countOdds(104, 277));
 */
