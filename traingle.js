/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  const N = nums.length - 2;
  console.log(nums);
  console.log(N);
  for (let i = 0; i < N; i++) {
    let a = nums[i];
    let b = nums[i + 1];
    let c = nums[i + 2];
    if (a < b + c) return a + b + c;

    console.log(`${a}, ${b}, ${c}`);
  }
  return 0;
};

console.log(largestPerimeter((nums = [1, 2, 1, 10])));
