/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextElement = function (catchIndex, arr2) {
  // 5 , [6, 5, 4, 3, 2, 1, 7]
  for (let j = catchIndex + 1; j < arr2.length; j++) {
    // arr2[j] = 7 > 1
    if (arr2[j] > arr2[catchIndex]) {
      return arr2[j];
    } else if (!(arr2[j] > arr2[catchIndex])) {
      continue;
    }
  }
  return -1;
};

var nextGreaterElement = function (nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const catchIndexInArray2 = nums2.indexOf(nums1[i]);
    const resultValue = nextElement(catchIndexInArray2, nums2); // 5 , [6, 5, 4, 3, 2, 1, 7]
    result.push(resultValue);
  }

  return result;
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

// [1, 3, 5, 2, 4]
// [6, 5, 4, 3, 2, 1, 7]

console.log(nextGreaterElement(nums1, nums2));
