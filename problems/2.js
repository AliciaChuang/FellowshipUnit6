/**
 * Problem 2: Mapping
 * 
 * Given a list of names, create a list of strings that says "Hi {Name}".
 * Use the .map function.
 * 
 * @example ["Chase", "Raman"] -> ["Hi Chase", "Hi Raman"]
 */
function problem(names) {
    lst = names.map(function(name) {
        return "Hi " + name;
    });
    return lst;
}

const tests = [
    [["Chase", "Raman"], ["Hi Chase", "Hi Raman"]],
    [["Mars"], ["Hi Mars"]],
    [[], []]
]

module.exports = {problem, tests};