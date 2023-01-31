var nearestValidPoint = function (x, y, points) {
  let manhattanIndices = new Map();
  let currentMin = Infinity;

  points.forEach((point, i) => {
    if (point[0] === x || point[1] === y) {
      console.log(point[0], point[1]);
      manhattanIndices.set(i, Math.abs(x - point[0]) + Math.abs(y - point[1]));
      currentMin = Math.min(
        currentMin,
        Math.abs(x - point[0]) + Math.abs(y - point[1])
      );
    }
  });

  for (let [index, distance] of manhattanIndices) {
    if (distance === currentMin) {
      return index;
    }
  }

  return -1;
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

console.log(nearestValidPoint(x, y, points));
