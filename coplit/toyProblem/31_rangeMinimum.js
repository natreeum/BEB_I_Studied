const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  function initSegmentTree(arr, start, end) {
    if (start === end) return { value: arr[start] };

    let mid = parseInt((start + end) / 2);
    let left = initSegmentTree(arr, start, mid);
    let right = initSegmentTree(arr, mid + 1, end);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  }

  const tree = initSegmentTree(arr, 0, arr.length - 1);

  function findMin(start, end, rangeStart, rangeEnd, tree) {
    if (rangeStart <= start && end <= rangeEnd) {
      return tree.value;
    }
    if (end < rangeStart || rangeEnd < start) {
      return Number.MAX_SAFE_INTEGER;
    }

    let mid = parseInt((start + end) / 2);
    return Math.min(
      findMin(start, mid, rangeStart, rangeEnd, tree.left),
      findMin(mid + 1, end, rangeStart, rangeEnd, tree.right)
    );
  }

  const mins = ranges.map((range) => {
    let [start, end] = range;
    return findMin(0, arr.length - 1, start, end, tree);
  });

  return mins;
};
