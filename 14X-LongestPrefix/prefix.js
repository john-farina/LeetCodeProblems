/**
 * @param {string[]} strs
 * @return {string}
 */
// why is this hard lol
// go through each array and see if they all equal f
// then do it again and see if it is the same

function longestCommonPrefix(strings) {
  let prefix = "";

  for (string of strings) {
    console.log(string);
    for (letter of string) {
      console.log(letter);
    }
  }
}

longestCommonPrefix(["flower", "flow", "flight"]); // fl
