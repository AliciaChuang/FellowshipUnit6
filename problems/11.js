/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    var alpha_str = str.split('').filter(function(value, index, arr){ 
        if (/^[A-Z]$/i.test(value)){
            return value;
        }
    });

    for (let i = 0; i < Math.ceil(alpha_str.length/2); i++){
        if (alpha_str[i].toLowerCase() != alpha_str[alpha_str.length - i - 1].toLowerCase()){
            return false;
        }
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};