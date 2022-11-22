const mergeSort = function (arr) {
  const merge = (leftArr, rightArr) => {
    let result = [];
    while (leftArr.length != 0 && rightArr.length != 0) {
      if (leftArr[0] < rightArr[0]) {
        result.push(leftArr.shift());
      } else result.push(rightArr.shift());
    }
    return result.concat(leftArr, rightArr);
  };
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr));
