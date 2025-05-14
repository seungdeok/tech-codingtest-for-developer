/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    const answer = [];

    intervals.sort((a, b) => a[0] - b[0]);
    let previous = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= previous[1]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        } else {
            answer.push(previous);
            previous = intervals[i];
        }
    }

    answer.push(previous);
    
    return answer;
};