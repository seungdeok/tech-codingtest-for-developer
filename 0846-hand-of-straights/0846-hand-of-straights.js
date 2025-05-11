/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    const map = new Map();
    for (const num of hand) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    hand.sort((a, b) => a - b);
    for (const num of hand) {
        if (map.get(num) > 0) {
            for (let i = num; i < num + groupSize; i++) {
                if ((map.get(i) || 0) === 0) {
                    return false;
                }
                map.set(i, map.get(i) - 1);
            }
        }
    }

    return true;
};