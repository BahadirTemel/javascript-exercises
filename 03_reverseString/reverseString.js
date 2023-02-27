const reverseString = function (word) {
    wordArray = word.split("");
    let reverseWord = [];
    reverseWord = wordArray.reverse();

    return reverseWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
