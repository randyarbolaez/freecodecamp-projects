/* Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case. */

function titleCase(str) {
  return str;
}

function titleCase(str) {
  let arrayOfWords = str.toLowerCase().split(' ');

  for (let i = 0; i < arrayOfWords.length; i++) {
    let removeFirstLetterOfEachWord = arrayOfWords[i].slice(1);
    let capitalizeTheFirstLetterOfEachWord = arrayOfWords[i][0].toUpperCase();

    arrayOfWords[i] =
      capitalizeTheFirstLetterOfEachWord + removeFirstLetterOfEachWord;
  }
  return arrayOfWords.join(' ');
}

titleCase("I'm a little tea pot");
