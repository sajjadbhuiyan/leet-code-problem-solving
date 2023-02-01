/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let bigArray;
  let shortArray;
  str1.length > str2.length ? (bigArray = str1) : (bigArray = str2);
  str1.length < str2.length ? (shortArray = str1) : (shortArray = str2);
  for (let i = 0; i < shortArray.length; i++) {
    bigArray[i] === shortArray[i];
  }
};

const str1 = "ABABAB";
const str2 = "ABAB";

gcdOfStrings(str1, str2);
