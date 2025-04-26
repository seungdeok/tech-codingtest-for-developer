class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  size() {
    return this.heap.length;
  }
  
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  
  pop() {
    if (this.size() === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  }
  
  heapifyUp() {
    let index = this.size() - 1;
    const inserted = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // 배열의 첫 번째 요소(소요 시간)를 비교
      if (this.heap[parentIndex][0] <= inserted[0]) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = inserted;
  }
  
  heapifyDown() {
    let index = 0;
    const count = this.size();
    const root = this.heap[index];
    while (index < count) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      if (leftIndex >= count) break;
      const smallerChildIndex =
        rightIndex < count && this.heap[rightIndex][0] < this.heap[leftIndex][0]
          ? rightIndex
          : leftIndex;
      // 배열의 첫 번째 요소(소요 시간)를 비교
      if (root[0] <= this.heap[smallerChildIndex][0]) break;
      this.heap[index] = this.heap[smallerChildIndex];
      index = smallerChildIndex;
    }
    this.heap[index] = root;
  }
  
  peek() {
    return this.heap[0] || null;
  }
}

function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);
    
    const minHeap = new MinHeap();
    let currentTime = 0;
    let totalWaitTime = 0;
    let jobIndex = 0;
    let completedJobs = 0;
    
    while (completedJobs < jobs.length) {
        while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
            // [소요시간, 요청시간] 형태로 넣습니다
            minHeap.push([jobs[jobIndex][1], jobs[jobIndex][0]]);
            jobIndex++;
        }
        
        if (minHeap.size() > 0) {
            const [duration, requestTime] = minHeap.pop();
            
            currentTime += duration;
            
            // 대기 시간 = 완료시간 - 요청시간
            const waitTime = currentTime - requestTime;
            totalWaitTime += waitTime;
            
            completedJobs++;
        } else if (jobIndex < jobs.length) {
            // 처리할 작업이 없으면 다음 작업 시간으로 점프
            currentTime = jobs[jobIndex][0];
        } else {
            // 더 이상 작업이 없으면 종료
            break;
        }
    }
    
    return Math.floor(totalWaitTime / jobs.length);
}