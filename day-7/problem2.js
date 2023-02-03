/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      count++;
    }
  }

  if (r * c !== count) {
    return mat;
  } else {
    const reShap = new Array(r).fill(0).map(() => new Array(c).fill(0));
    // console.log(reShap);

    for (let i = 0; i < r * c; i++) {
      reShap[Math.floor(i / c)][i % c] =
        mat[Math.floor(i / mat[0].length)][i % mat[0].length];
    }

    return reShap;
  }
};

const mat = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [13, 14],
  [15, 16],
];
const r = 2;
const c = 8;

console.log(matrixReshape(mat, r, c));
