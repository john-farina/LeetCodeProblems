function twoSum(nums, target) {
  // get the first val in an array
  // loop through each other val and do math to see if it equals target
  // if not keep going
  let savedVal;

  for (let i = 0; i < nums.length; i++) {
    savedVal = nums[i];

    for (let l = i + 1; l < nums.length; l++) {
      if (nums[i] + nums[l] === target) {
        console.log("passed: ", [i, l]);
        return [i, l];
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
