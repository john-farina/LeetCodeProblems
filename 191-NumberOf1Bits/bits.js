/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let string = BigInt(n).toString(2);
  let oneCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
      oneCount++;
    }
  }

  console.log(oneCount);
  return oneCount;
}

hammingWeight(00000000000000000000000000001011);
