/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let bigString;
  const newArray = [];
  word1.length > word2.length ? (bigString = word1) : (bigString = word2);
  for (let i = 0; i < bigString.length; i++) {
    newArray.push(word1[i]);
    newArray.push(word2[i]);
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === undefined) {
      newArray.splice(i, 1);
    }
  }
  return newArray.join("");
};

const word1 = "ab";
const word2 = "pqrs";

console.log(mergeAlternately(word1, word2));
