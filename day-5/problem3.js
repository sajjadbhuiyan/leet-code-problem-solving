/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const distance = coordinates[1][0] - coordinates[0][0];
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = 0; j < coordinates[i].length; j++) {
      const element = coordinates[i][j];
      console.log(element);
    }
    // console.log(coordinates[i]);
  }
};

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];

checkStraightLine(coordinates);
