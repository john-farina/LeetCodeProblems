/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log("first loop", nums[i]);
    for (let l = 0; l < nums.length; l++) {
      console.log("second loop", nums[l]);
      if (nums[l] === nums[i]) {
      }
    }
  }
}

singleNumber([1, 2, 3]); //should return 1
