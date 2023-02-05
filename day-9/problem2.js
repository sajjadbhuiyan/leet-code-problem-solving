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

  const numArray = [];
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j].length === 3) {
      numArray.push(parseInt(newArray[j].slice(0, -1)));
    } else {
      numArray.push(parseInt(newArray[j]));
    }
  }

  const alphabet = ["0"];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  const result = [];
  for (let i = 0; i < numArray.length; i++) {
    let ss = numArray[i];
    let dd = alphabet.indexOf(alphabet[ss]);
    if (ss === dd) {
      result.push(alphabet[ss]);
    }
  }

  return result.join("");
};

const s = "10#11#12";
console.log(freqAlphabets(s));
