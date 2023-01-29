var isPalindrome = function (x) {
  var reverse = 0; //1 -> 10 -> 101
  var copy = x; // 10 -> 1 ->

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10); //Math.floor(copy / 10)
  }

  return reverse == x;
};

const number = 101;

console.log(isPalindrome(number));
