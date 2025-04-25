function solution(genres, plays) {
    const map = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const value = map.get(genres[i])
            ? { sum: map.get(genres[i]).sum + plays[i], value: [...map.get(genres[i]).value, { index:i, play: plays[i] }] }
            : { sum: plays[i], value: [{ index: i, play: plays[i] }] };
        
        map.set(genres[i], value);
    }
    
    const arr = [];
    
    for (const key of map.keys()) {
        const { sum, value } = map.get(key);
        arr.push({ sum, value: value.sort((a, b) => b.play - a.play).slice(0, 2) });
    }
    
    arr.sort((a, b) => b.sum - a.sum);
    
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        answer.push(...arr[i].value.map((v) => v.index));
    }
    
    return answer;
}