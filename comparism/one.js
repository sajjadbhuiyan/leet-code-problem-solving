var subtractProductAndSum = function (n) {
  if (n <= 1) {
    return 0;
  }

  var numbers = splitIntoDigits(n);
  let sum = 0;
  let product = 1;

  for (const number of numbers) {
    sum += number;
    product *= number;
  }

  return product - sum;
};

var splitIntoDigits = function (n) {
  var digits = [];

  while (n >= 1) {
    n = n / 10;

    const digit = parseInt((n - parseInt(n)).toFixed(1) * 10);

    digits.push(digit);
    n = parseInt(n);
  }

  console.log(digits);

  return digits;
};

console.log(subtractProductAndSum(234));

console.log(15457 % 10);
