/**
 * @param {string[]} strs
 * @return {string}
 */
// why is this hard lol
//go through each array and see if they all equal f
//then do it again and see if it is the same
function longestCommonPrefix(strings) {
  let prefix = "f";
  let count = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][count] === prefix) {
      console.log("hello", i);
      // console.log(prefix);
    }
    count++;
  }
  return;
  console.log(prefix);
}

longestCommonPrefix(["flower", "flow", "flight"]); // fl
