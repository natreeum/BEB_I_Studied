// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  if (heap.length > 1) {
    let curIdx = heap.length - 1;
    let parentIdx = getParentIdx(curIdx);
    while (parentIdx >= 0 && heap[curIdx] < heap[parentIdx]) {
      swap(curIdx, parentIdx, heap);
      curIdx = parentIdx;
      parentIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  swap(0, heap.length - 1, heap);
  heap.pop();
  if (heap.length === 0) return [];
  let minIdx = 0;
  let curIdx;
  while (curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;
    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }
    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }
    swap(curIdx, minIdx, heap);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const result = [];
  while (minHeap.length > 0) {
    result.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return result;
};

console.log(heapSort([5, 4, 3, 2, 1]));
