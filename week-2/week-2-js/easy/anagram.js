/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  function sortMe(word) {
    return word.split('').sort().join("")

  }
  newStr1=sortMe(str1.toLowerCase().split("").join())

  newStr2=sortMe( str2.toLowerCase().split('').join())



console.log(newStr1);

console.log(newStr2);



  if (newStr1 == newStr2) {
    console.log("true");

    return true

  }
  else {
    console.log("false");

    return false
  }



}

isAnagram("Mukull", "llumku")


module.exports = isAnagram;
