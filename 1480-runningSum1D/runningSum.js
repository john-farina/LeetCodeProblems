/**
 * @param {number[]} nums
 * @return {number[]}
 */

function runningSum(nums) {
  let sumArray = [];

  for (let i = 0; i < nums.length; i++) {
    let newVal = nums[i];

    if (i === 0) {
      sumArray.push(newVal);

      continue;
    }

    for (let l = 0; l < i; l++) {
      newVal += nums[l];
    }

    sumArray.push(newVal);
  }

  return sumArray;
}

// [1,2,3,4]
// 1,
// 1 + 2 = 3,
// 1 + 2 + 3 = 6,
// 1 + 2 + 3 + 4 = 10

runningSum([1, 2, 3, 4]);

runningSum([1, 1, 1, 1, 1]);
