/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
  let savedArray = undefined;

  for (let i = 0; i < nums.length; i++) {
    let thisVal = nums[i];

    if (!savedArray) {
      savedArray = [thisVal];

      continue;
    }

    for (let l = 0; l < savedArray.length; l++) {
      if (thisVal === savedArray[l]) {
        return true;
      }
    }

    savedArray.push(thisVal);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false

console.log(containsDuplicate([2, 14, 18, 22, 22])); // false
