/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      for (let j = 0; j < points[i].length; j++) {
        const element = points[i][j];
        console.log(element);
      }
      //   console.log(points[i]);
    }
  }
};

const x = 3;
const y = 4;
const points = [[3, 3], [(1, 2)], [3, 1], [2, 4], [2, 3], [4, 4]];

nearestValidPoint(x, y, points);
