function arrProduct(arr) {
  if (arr.length === 0) return 1;
  else {
    let tArr = [...arr];
    tArr.pop();
    return arr[arr.length - 1] * arrProduct(tArr);
  }
}

console.log(arrProduct([1, 2, 3, 4]));
