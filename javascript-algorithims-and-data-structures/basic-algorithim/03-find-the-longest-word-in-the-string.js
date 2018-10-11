/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  var blah = str.split(' ');
  var foo = 0;

  for (var i = 0; i < blah.length; i++) {
    if (blah[i].length > foo) {
      foo = blah[i].length;
    }
  }
  return foo;
}

// I was a little bit confused because I wasn't sure what to do after I got all the words length.
