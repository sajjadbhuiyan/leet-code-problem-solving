// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let j = i; // 2
//     let countRm = 0;

//     if (nums[i] === nums[i + 1]) {
//       while (nums[i] === nums[++j]) {
//         countRm++;
//       }
//       nums.splice(i, countRm);
//       i - countRm;
//     }
//   }

//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  console.log(nums);
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
