/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length < 1) return [newInterval];

    const answer = [];
    intervals.push(newInterval);
    intervals.sort((a , b) => a[0] - b[0]);
    let previous = intervals[0];

    for (let i = 0; i < intervals.length; i++) {
        if (previous[1] >= intervals[i][0]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        } else {
            answer.push(previous);
            previous = intervals[i];
        }
    }

    answer.push(previous);

    return answer;
};