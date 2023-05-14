const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const count = {};

for (let i = 0; i < input.length; i++) {
    if (!count[input.charAt(i).toUpperCase()]) {
        count[input.charAt(i).toUpperCase()] = 1;
    } else {
        count[input.charAt(i).toUpperCase()] += 1;
    }
}

const sortedArr = Object
    .keys(count)
    .map((a) => {
        return {
            key: a,
            value: count[a]
        };
    })
    .sort((a, b) => b.value - a.value);

if (sortedArr.length > 1 && sortedArr[0].value === sortedArr[1].value) {
    console.log('?');
} else {
    console.log(sortedArr[0].key);
}