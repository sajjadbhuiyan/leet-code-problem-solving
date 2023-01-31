/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  // Sort in DESC order
  nums.sort((a, b) => b - a);
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    // Decalre the three sides of the triangle
    let a = nums[i],
      b = nums[i + 1],
      c = nums[i + 2];

    console.log(`${a}, ${b}, ${c}`);

    // Perform the check depending on the rule
    if (a < b + c) return a + b + c;
  }

  // If we cannot form a triangle, we return 0
  return 0;
};

console.log(largestPerimeter((nums = [10, 10, 2, 8, 20, 20, 4])));
