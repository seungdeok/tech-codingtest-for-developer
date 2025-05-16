/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length < 2) return 0;

    intervals.sort((a,b) => a[1] - b[1]);

    let end = intervals[0][1];
    let answer = 1;
    for (let i = 1; i < intervals.length; i++) {
        if (end <= intervals[i][0]) { // 겹치지 않는 갯수
            answer++;
            end = intervals[i][1];
        }
    }

    return intervals.length - answer;
};