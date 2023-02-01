/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const distance = coordinates[0][1] - coordinates[0][0];
  let count = 0;

  for (let i = 0; i < coordinates.length; i++) {
    const measureDistance = coordinates[i][1] - coordinates[i][0];
    if (measureDistance === distance) {
      count++;
    }
  }

  if (count === coordinates.length) {
    return true;
  }

  return false;
};

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];

console.log(checkStraightLine(coordinates));
