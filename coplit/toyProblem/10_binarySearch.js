const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  const bsc = function (min, max) {
    if (min > max) return -1;
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      return bsc(min, mid - 1);
    } else if (arr[mid] < target) {
      return bsc(mid + 1, max);
    }
  };
  return bsc(0, arr.length - 1);
};
