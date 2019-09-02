/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  if (typeof str === 'string') {
    const words = str.split(' ');
    let longWord = words[0];
    for (let i = 0; i < words.length; i++) {
      if (longWord.length < words[i].length) {
        longWord = words[i];
      }
    }
    return longWord.length;
  }
  return 'Please enter string!';
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
