/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const makeArray = command.split("");
  const newArray = [];
  for (let i = 0; i < makeArray.length; i++) {
    if (makeArray[i] === "(" && makeArray[i + 1] === ")") {
      newArray.push("o");
    } else if (makeArray[i] === "a") {
      newArray.push("al");
    } else if (makeArray[i] === "G") {
      newArray.push("G");
    }
  }
  return newArray.join("");
};

const command = "G()(al)";
console.log(interpret(command));
