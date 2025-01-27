/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    var count = {};
    for (let num of numbers) {
        if (count[num]) {
            count[num] += 1;
            if (count[num] > Math.floor(numbers.length/2)){
                return num;
            }
        } 
        else {
            count[num] = 1;
        }
    }

}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};