function solution(s){
    const stack = [];
    
    if (s.charAt(0) === ')') {
		return false;
	}
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(") {
            stack.push(s.charAt(i));
        } else if (s.charAt(i) === ")") {
            stack.pop();
        }
    }

    return stack.length === 0;
}