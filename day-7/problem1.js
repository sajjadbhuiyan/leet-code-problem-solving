/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const diagonal1 = [];
  for (let i = 0; i < mat.length; i++) {
    diagonal1.push(mat[i][i]);
  }

  const diagonal2 = [];
  for (let i = 0; i < mat.length; i++) {
    let reversedElement = mat[i].reverse();
    diagonal2.push(reversedElement[i]);
  }

  if (mat[0].length % 2 !== 0) {
    diagonal1.splice(Math.floor(diagonal1.length / 2), 1);
  }

  const addDiagonal = [];
  addDiagonal.push(...diagonal1);
  addDiagonal.push(...diagonal2);

  let sum = 0;
  for (let i = 0; i < addDiagonal.length; i++) {
    sum += addDiagonal[i];
  }
  return sum;
};

const mat = [
  [4, 6, 7],
  [2, 9, 4],
  [5, 5, 5],
];
/* const mat = [
  [4, 6, 7, 8, 2],
  [2, 9, 4, 4, 6],
  [5, 5, 5, 8, 7],
  [5, 5, 5, 8, 7],
  [5, 5, 5, 8, 7],
]; */

/* const mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]; */

diagonalSum(mat);
