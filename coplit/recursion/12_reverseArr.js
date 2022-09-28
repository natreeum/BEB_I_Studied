function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return arr;
  else {
    const tArr = [...arr];
    tArr.splice(0, 1);
    const resArr = reverseArr(tArr);
    resArr.push(arr[0]);
    return resArr;
  }
}

console.log(reverseArr([1, 2, 3, 4, 5]));
