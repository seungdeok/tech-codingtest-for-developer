function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  
  let bridge = Array.from({length: bridge_length}, () => 0);
  let bridge_sum = 0;
  const trucks = truck_weights;
  
  answer++;
  bridge.shift();
  bridge_sum += trucks[0];
  bridge.push(trucks.shift());

  while (bridge_sum > 0) {
      answer++;
      bridge_sum -= bridge.shift();

      if (trucks.length > 0 && bridge_sum + trucks[0] <= weight) {
          bridge_sum += trucks[0];
          bridge.push(trucks.shift());
        } else {
          bridge.push(0);
      }
  }
  
  return answer;
}