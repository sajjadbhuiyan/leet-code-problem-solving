/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const convartArray = x.toString();
  let arrayToString = "";
  for (let i = convartArray.length - 1; i >= 0; i--) {
    arrayToString = arrayToString + convartArray[i];
  }

  if (convartArray === arrayToString) {
    return true;
  } else {
    return false;
  }
};

const number = 10;

console.log(isPalindrome(number));

// console.log("121" === "123");
