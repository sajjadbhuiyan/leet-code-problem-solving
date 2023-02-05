/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  const newArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      newArray.push(`${s[i]}${s[i + 1]}${s[i + 2]}`);
    } else if (s[i + 1] !== "#" && s[i + 2] !== "#") {
      if (s[i] !== "#") {
        newArray.push(s[i]);
      }
    }
  }
  console.log(newArray);
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 1; i <= alphabet.length; i++) {
    console.log(`${i} is ${alphabet[i]}`);
  }
};

const s = "1326#";
freqAlphabets(s);
