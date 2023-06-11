function solution(genres, plays) {
    const map = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        map.set(
            genres[i], 
            { 
                total: (map.get(genres[i]) ? map.get(genres[i]).total : 0) + plays[i],
                plays: [...(map.get(genres[i]) ? map.get(genres[i]).plays : []), { index: i, play: plays[i] }].sort((a, b) => {
                    if (a.play - b.play > 0) return -1;
                    else if (a.play - b.play < 0) return 1;
                    else if (a.play - b.play === 0 && a.index < b.index) return 1;
                    else return 0;
                })
            }
        );
    }
    
    const list = [...map.entries()]
        .map((v) => v[1]).sort((a, b) => b.total - a.total);
    
    const answer = [];
    for (let i = 0; i < list.length; i++) {
        const plays = list[i].plays;
        
        const songs = [];
        
        for (let j = 0; j < plays.length; j++) {
            if (songs.length < 2) {
                songs.push(plays[j].index);
            }
        }
        
        answer.push(songs);
    }

    return answer.flat();
}