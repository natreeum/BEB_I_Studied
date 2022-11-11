const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.
  let callbackFunc;
  if (callback) {
    callbackFunc = callback;
  } else {
    callbackFunc = (e) => e;
  }
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (callbackFunc(arr[idx]) < callbackFunc(arr[j])) {
        let tmp = arr[idx];
        arr[idx] = arr[j];
        arr[j] = tmp;
        idx--;
      } else break;
    }
  }
  return arr;
};

let output = insertionSort([-10, -11, 2, 29], (e) => e * e);
console.log(output); // --> [1, 3, 21]
