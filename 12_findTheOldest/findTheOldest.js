const findTheOldest = function(people) {
    return people.sort((a, b) => a.age - b.age)[0];
};
// Do not edit below this line
module.exports = findTheOldest;
