function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length == 0) return 0;
  else {
    let tArr = Array.from(arr);
    tArr.pop();
    return arr[arr.length - 1] + arrSum(tArr);
  }
}

console.log(arrSum([1, 2, 3, 4]));
