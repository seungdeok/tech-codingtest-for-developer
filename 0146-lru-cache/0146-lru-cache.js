class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

// 가장 최근 사용된 위치
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    
    this.head.next.prev = node;
    this.head.next = node;
};

// 가장 오래된 노드
LRUCache.prototype.removeTail = function() {
    const last = this.tail.prev;
    this.removeNode(last);
    return last;
};

// 최근 사용됨
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache.get(key);
    
    if (!node) {
        return -1;
    }
    
    // 최근 사용됨
    this.moveToHead(node);
    
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.cache.get(key);
    
    if (node) {
        // 기존 키가 존재하는 경우
        node.value = value;
        this.moveToHead(node);
    } else {
        const newNode = new Node(key, value);
        
        if (this.cache.size >= this.capacity) {
            // 용량 초과: 가장 오래된 노드 제거
            const tail = this.removeTail();
            this.cache.delete(tail.key);
        }
        
        // 새 노드를 head에 추가하고 해시맵에 저장
        this.addToHead(newNode);
        this.cache.set(key, newNode);
    }
};