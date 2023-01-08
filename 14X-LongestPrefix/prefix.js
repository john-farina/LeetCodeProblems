/**
 * @param {string[]} strs
 * @return {string}
 */
let count = 0;
let prefix = undefined;

function longestCommonPrefix(strings) {
  prefix = prefix;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] === "") {
      return "";
    }

    if (strings.length === 1) {
      return strings[0];
    }

    if (!prefix) {
      console.log(`SET-ZERO-PREFIX: ${prefix} - used: ${strings[i]}`);

      prefix = strings[i][count];

      console.log(prefix);

      continue;
    }

    if (strings[i].length === 1) {
      console.log("nice");
      return prefix;
    }

    if (count > 0 && prefix.length === count) {
      console.log(`SET-${count}-PREFIX: ${prefix} - used: ${strings[i]}`);

      prefix = prefix + strings[i][count];

      continue;
    }

    if (strings[i][count] !== prefix[count]) {
      if (prefix.length > 1) {
        prefix = prefix.slice(0, -1);
      }
      return "";
    }

    console.log("i match prefix: ", strings[i]);

    if (i === strings.length - 1) {
      count++;

      longestCommonPrefix(strings);
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["fly", "flyf", "flys"])); // fl
console.log(longestCommonPrefix(["a", "ab"])); // fl

// if (strings[i][count] !== prefix[count]) {
//     console.log(
//       `I FAILED! heres why: \nprefix = ${prefix}, \nthisPrefixCheck: ${prefix[count]}, \nstring = ${strings[i]}, \nstringCheck = ${strings[i][count]}, \nEND`
//     );

//     prefix = prefix.slice(0, -1);

//     return "";
//   }
