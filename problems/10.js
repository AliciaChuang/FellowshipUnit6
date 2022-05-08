/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    var new_str = [];
    for (let i = 0; i < str.length; i++){
        if (i < Math.floor(str.length / 2)){
            new_str.push(str[i].toUpperCase());
        }
        else{
            new_str.push(str[i].toLowerCase());
        }
    }
    return new_str.join('');
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};