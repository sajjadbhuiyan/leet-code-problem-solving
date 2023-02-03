// Time Complexity : O(r*c)
// Space Complexity : O(r*c)
var matrixReshape = function (mat, r, c) {
  // If transformation doesn't occur, return mat...
  if (mat.length * mat[0].length != r * c) {
    return mat;
  }
  // Otherwise create a output matrix and fill the cells...
  const output = new Array(r).fill(0); //map(() => new Array(c).fill(0));
  const innerArray = output.map(() => new Array(c).fill(0));
  console.log(innerArray);
  // Traverse the matrix through the loop...
  for (let i = 0; i < r * c; i++) {
    // idx % c will give us the current column number...
    // idx / c will give us how many rows we have completely filled...
    innerArray[Math.floor(i / c)][i % c] =
      mat[Math.floor(i / mat[0].length)][i % mat[0].length];
  }
  return output; // Return the output matrix...
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

matrixReshape(mat, r, c);
