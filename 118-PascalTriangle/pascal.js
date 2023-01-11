/**
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows) {
  let triangle = [[1], [1, 1]];

  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return triangle;
  }

  for (let i = 1; i < numRows; i++) {
    let lastStep = triangle[triangle.length - 1];
    let firstVal = lastStep[0];
    let lastVal = lastStep[lastStep.length - 1];

    console.log(lastStep, firstVal, lastVal);
  }
}

generate(5);
//[
//[1],
//[1,1],
//[1,2,1],
//[1,3,3,1],
//[1,4,6,4,1]]

[[1], [1, 1]];
