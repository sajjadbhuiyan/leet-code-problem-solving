/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let unShitCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let deletedValueInArray = nums.splice(i, 1);
      let justValue = deletedValueInArray[0];
      if (nums.splice(unShitCount, 0, justValue)) {
        unShitCount++;
      }
    }
  }
};

const nums = [154, 0, 254];
moveZeroes(nums);
console.log(nums);

/* const deletedValueInArray = nums.splice(1, 1);
const justValue = deletedValueInArray[0];
nums.unshift(justValue);
console.log(deletedValueInArray, justValue, nums); */
