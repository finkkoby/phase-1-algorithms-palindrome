function isPalindrome(word) {
  let answer;
  for (let i = 0; i < (word.length / 2); i++) {
    if (word[i] === word[word.length - (i + 1)]) {
      answer = true;
    } else {
      answer = false;
      break;
    }
  }
  return answer;
}

/* 
  Add your pseudocode here
  for (i <= string.length / 2)
    if string[i] === string[-(i + 1)]
    else {
      return false;
    }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("oratorio"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
