const canMakeArithmeticProgression = (arr) => {
  const sortedArray = [...arr].sort((a, b) => a - b);
  console.log(sortedArray);
  let difference = sortedArray[1] - sortedArray[0];
  console.log(difference);
  for (let item = 1; item < sortedArray.length - 1; item++) {
    console.log(sortedArray[item + 1] - sortedArray[item]);
    if (sortedArray[item + 1] - sortedArray[item] !== difference) return false;
  }
  return true;
};

const arr = [-68, -96, -12, -40, 16];
console.log(canMakeArithmeticProgression(arr));
