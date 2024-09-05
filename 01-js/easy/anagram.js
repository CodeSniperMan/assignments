/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.size() != str2.size())    return flase;

  let charFreq = {};
  for(let char of str1) {
    charFreq[char] = charFreq[char] + 1;
  }

  for(let char of str2) {
    if(!charFreq[char])
      return false;
    charFreq[char]--;
  }


  return true;

}

module.exports = isAnagram;
