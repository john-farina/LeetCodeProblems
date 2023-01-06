/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(string) {
  let count = 0;

  console.log(string.length);

  if (string.length === 1) {
    count = 1;
    return count;
  }

  for (let i = string.length - 1; i > 0; i--) {
    if (string[i] !== " ") {
      count++;
    } else {
      if (count === 0) {
      } else {
        break;
      }
    }
  }

  console.log(count);

  return count;
}

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
lengthOfLastWord("a");
