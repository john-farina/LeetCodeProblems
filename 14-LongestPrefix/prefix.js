/**
 * @param {string[]} strs
 * @return {string}
 */
// why is this hard lol
//go through each array and see if they all equal f
//then do it again and see if it is the same
function longestCommonPrefix(strings) {
  let prefix = [];
  for (let i = 0; i < strings.length; i++) {
    prefix.push(strings[i][0]);
  }
  console.log(prefix);
}

longestCommonPrefix(["flower", "flow", "flight"]); // fl
