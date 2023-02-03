var checkStraightLine = function (coordinates) {
  const findDiff = (c1, c2) => {
    if (coordinates[0][0] - coordinates[1][0] === 0)
      // [1, 2],
      // [2, 3],
      return (c2[0] - c1[0]) / (c2[1] - c1[1]);
    else return (c2[1] - c1[1]) / (c2[0] - c1[0]);
  };

  const diff = findDiff(coordinates[0], coordinates[1]);
  for (let i = 0; i < coordinates.length - 1; i++) {
    if (diff !== findDiff(coordinates[i], coordinates[i + 1])) return false;
  }
  return true;
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
