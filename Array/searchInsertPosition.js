/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   if (nums.includes(target)) {
//     return nums.indexOf(target);
//   } else {
//     nums.push(target);
//     nums.sort((a, b) => a - b);
//     return nums.indexOf(target);
//   }
// };

var searchInsert = function (nums, target) {
  let lo = 0, // 3 ->
    hi = nums.length; // 5 -> 4 -> 3
  while (lo < hi) {
    // breaks if lo == hi
    let mid = lo + Math.floor((hi - lo) / 2); // (0+2)=2 -> (3+1)=4 -> (3+0)=3
    if (target > nums[mid]) {
      lo = mid + 1; // no way mid is a valid option
    } else {
      hi = mid; // it might be possibe to inseart @ mid
    }
  }
  return lo;
};

const nums = [3, 5, 7, 9, 10],
  target = 6;

console.log(searchInsert(nums, target));
