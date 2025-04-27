// 1. 배열의 모든 가능한 순서 조합 (순열)
function getPermutations(arr) {
  if (arr.length <= 1) return [arr];
  
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remainingElements = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const remainingPermutations = getPermutations(remainingElements);
    
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push([current, ...remainingPermutations[j]]);
    }
  }
  
  return result;
}

function solution(k, dungeons) {
    let answer = -1;
    
    const result = getPermutations(dungeons);
    
    for (const dungeon of result) {
        let cnt = 0;
        let point = k;
        
        for (const [min, use] of dungeon) {
            if (point >= min) {
                point -= use;
                cnt++;
            }
        }
        
        answer = Math.max(answer, cnt);
    }
    
    return answer;
}