var isHappy = function (n) {
  const checked = []; // [19 , 82, 68, 100]
  while (n !== 1) {
    if (checked.includes(n)) {
      // console.log(checked.includes(n));
      return false;
    }
    checked.push(n);
    n = n
      .toString()
      .split("")
      .map((i) => i ** 2) // [64 , 4] -> [36,64] -> [1, 0, 0]
      .reduce((sum, i) => sum + i, 0);
    console.log(n);
  }
  return true;
};

console.log(isHappy(19));
