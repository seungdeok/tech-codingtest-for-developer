function solution(sizes) {
    const width = [];
    const height = [];
    
    const arr = sizes
        .map((item) => item[0] > item[1] ? [item[0], item[1]] : [item[1], item[0]])
    
    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }
    
    return Math.max(...width) * Math.max(...height);
}