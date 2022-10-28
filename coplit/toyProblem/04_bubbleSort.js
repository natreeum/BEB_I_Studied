const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let cnt = 0;
  for (let j of arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        cnt++;
      }
    }
    if (cnt === 0) return arr;
  }
  return arr;
};

let output = bubbleSort([
  2, 1, 3, 1, 5, 6, 564, 7, 3, 4, 65, 3, 4, 2, 3, 4, 12,
]);
console.log(output); // --> [1, 2, 3]
