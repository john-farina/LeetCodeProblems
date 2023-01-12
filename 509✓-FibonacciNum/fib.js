/**
 * @param {number} n
 * @return {number}
 */

function fib(n) {
  let lastNum = 0;
  let lastSum = 1;
  let newSum;

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  for (let i = 0; i < n - 1; i++) {
    newSum = lastNum + lastSum;

    lastNum = lastSum;

    lastSum = newSum;
  }

  return newSum;
}

// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// 8 + 13 = 21

//3
fib(1);
