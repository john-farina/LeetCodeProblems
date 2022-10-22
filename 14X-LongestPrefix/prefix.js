/**
 * @param {string[]} strs
 * @return {string}
 */
// why is this hard lol
//go through each array and see if they all equal f
//then do it again and see if it is the same
function longestCommonPrefix(strings) {
  let prefix = undefined;

  for (string of strings) {
    console.log(string);
    for (letter in string) {
      if (prefix === undefined) {
        console.log(string[letter]);
        prefix += string[letter];
        break;
      }
    }
  }
}

longestCommonPrefix(["flower", "flow", "flight"]); // fl
