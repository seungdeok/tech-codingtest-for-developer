const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

for (let i = 1; i <= n; i++) {
    const str = input[i];
    
    if (checkPalindrome(str)) {
        console.log(0);
    } else {
        let isPalindrome = false;
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
            if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
                if (checkPalindrome(str.slice(0, i) + str.slice(i + 1 , str.length))) isPalindrome = true;
                if (checkPalindrome(str.slice(0, str.length - 1 - i) + str.slice(str.length - i, str.length))) isPalindrome = true;
                break;
            }
        }
        if (isPalindrome) {
            console.log(1);
        } else {
            console.log(2);
        }
    }
}

function checkPalindrome(value) {
    return value === value.split("").reverse().join("");
}