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

            if (this.heap[parentIndex] <= inserted) break;

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
                rightIndex < count && this.heap[rightIndex] < this.heap[leftIndex]
                    ? rightIndex
                    : leftIndex;

            if (root <= this.heap[smallerChildIndex]) break;

            this.heap[index] = this.heap[smallerChildIndex];
            index = smallerChildIndex;
        }

        this.heap[index] = root;
    }

    peek() {
        return this.heap[0] || null;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    for (const value of scoville) {
        minHeap.push(value);
    }
    
    let mixCount = 0;
    
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        
        const newScoville = first + (second * 2);
        minHeap.push(newScoville);
        
        mixCount++;
    }
    
    if (minHeap.peek() < K) {
        return -1;
    }
    
    return mixCount;
}