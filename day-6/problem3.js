/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let newArray = [];
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      const element = accounts[i][j];
      sum += element;
    }
    newArray.push(sum);
  }
  return Math.max(...newArray);
};

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
console.log(maximumWealth(accounts));
