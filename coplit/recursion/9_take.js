function take(num, arr) {
  if (num > arr.length) return arr;
  if (num === 0) return [];
  else {
    const ttArr = [...arr];
    ttArr.splice(0, 1);
    const tArr = take(num - 1, ttArr);
    tArr.unshift(arr[0]);
    return tArr;
  }
}

console.log(take(2, [1, 2, 3, 4]));
