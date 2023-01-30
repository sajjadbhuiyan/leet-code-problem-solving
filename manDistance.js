/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  for (let i = 0; i < points.length; i++) {
    // for (let j = 0; j < points[i].length; j++) {
    //   const element = points[i][j];
    //   console.log(element);
    // }
    if (points[i][0] === x || points[i][1] === y) {
      console.log(points[i]);
    }
  }
};

const x = 3;
const y = 4;
const points = [
  [1, 2],
  [3, 1],
  [2, 4],
  [2, 3],
  [4, 4],
];

nearestValidPoint(x, y, points);
