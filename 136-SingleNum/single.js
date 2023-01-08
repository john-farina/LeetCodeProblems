/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
  let arrays = [];

  for (let i = 0; i < nums.length; i++) {
    if (arrays[0] === undefined) {
      console.log("first number: ", i);
      arrays[0] = [nums[i]];
      continue;
    }

    for (let l = 0; l < arrays.length; l++) {
      console.log(nums[i], "is equal to?.. ", arrays[l][0]);

      if (nums[i] === arrays[l][0]) {
        console.log("yes it is im adding it");
        arrays[l].push(nums[i]);
        console.log("after added: ", arrays[l]);
      } else {
        console.log("no it isnt im making a new array for it");
      }
    }
  }

  console.log(arrays);
}

singleNumber([4, 3, 1, 3, 4]);
