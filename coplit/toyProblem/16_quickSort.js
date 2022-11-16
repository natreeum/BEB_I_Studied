const quickSort = function (arr, cb = (e) => e) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length < 2) return arr;

  let smallerArr = [];
  let biggerArr = [];
  let pivot = arr[0];
  arr.shift();
  for (let i of arr) {
    if (cb(i) <= cb(pivot)) smallerArr.push(i);
    if (cb(i) > cb(pivot)) biggerArr.push(i);
  }

  return [...quickSort(smallerArr, cb), pivot, ...quickSort(biggerArr, cb)];
};

let output = quickSort(
  [6, 3, 7, 4, 2, 1, 6, 6, 3, 7, 55, 7, 3, 2, 345],
  (e) => e * e
);
console.log(output); // --> [1, 3, 21]
