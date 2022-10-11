function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return {};
  const result = {};
  result[arr[0]] = arr[arr.length - 1];
  return result;
}
