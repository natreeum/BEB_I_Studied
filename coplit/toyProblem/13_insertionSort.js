const insertionSort = function (arr, callback = (e) => e) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (callback(arr[idx]) < callback(arr[j])) {
        let tmp = arr[idx];
        arr[idx] = arr[j];
        arr[j] = tmp;
        idx--;
      } else break;
    }
  }
  return arr;
};
