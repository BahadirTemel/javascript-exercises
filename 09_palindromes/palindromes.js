const palindromes = function (words) {
  const alteredWords = words.toLowerCase().replace(/[^a-z0-9]/g, "");
  return alteredWords === alteredWords.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
