function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return arr;
  const resArr = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      resArr.push(...flattenArr(i));
    } else resArr.push(i);
  }
  return resArr;
}

console.log(flattenArr([1, 2, 3, [1, 2, 3, [1, 2, 3, 4]], 1, 2, 3, [2, 3, 4]]));
