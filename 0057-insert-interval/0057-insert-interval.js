/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const answer = [];
    
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        
        if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        
        if (interval[0] > newInterval[1]) {
            answer.push(newInterval, ...intervals.slice(i));
            return answer;
        }
        
        answer.push(interval);
    }
    
    answer.push(newInterval);
    return answer;
};