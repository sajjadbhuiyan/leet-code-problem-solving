/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const motherArray = [];
  for (let i = 0; i < words.length; i++) {
    motherArray.push(new Array());
    for (let j = 0; j < words[i].length; j++) {
      motherArray[i][j] = order.indexOf(words[i][j]);
    }
  }
  console.log(motherArray);
};

const words = ["hello", "leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";

console.log(isAlienSorted(words, order));
