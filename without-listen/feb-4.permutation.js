/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const firstIntMakeArray = s1.split("").reverse();
  if (
    (firstIntMakeArray.length === 1 && s2.includes(firstIntMakeArray[0])) ||
    s1 === s2
  ) {
    return true;
  }
  const storIndex = [];
  for (let i = 0; i < firstIntMakeArray.length; i++) {
    for (let j = i; j < s2.length; j++) {
      if (s2[j] === firstIntMakeArray[i]) {
        storIndex.push(s2.indexOf(firstIntMakeArray[i], i));
      }
    }
  }
  for (let j = 0; j < storIndex.length; j++) {
    if (storIndex[j + 1] - storIndex[j] === 1) {
      return true;
    } else {
      return false;
    }
  }
};

/* const s1 = "a";
const s2 = "ab"; */

/* const s1 = "ddd";
const s2 = "abcddd"; */

/* 
"abc"
"bbbca"
*/

const s1 = "adc"; // cda
const s2 = "dcda";

console.log(checkInclusion(s1, s2));
