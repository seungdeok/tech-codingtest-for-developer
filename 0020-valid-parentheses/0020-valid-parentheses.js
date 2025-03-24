/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const str of s.split("")) {
        if (stack[stack.length - 1] === "(" && str === ")") {
            stack.pop();
        } else if (stack[stack.length - 1] === "{" && str === "}") {
            stack.pop();
        } else if (stack[stack.length - 1] === "[" && str === "]") {
            stack.pop();
        } else {
            stack.push(str);
        }
    }

    return stack.length === 0;
};