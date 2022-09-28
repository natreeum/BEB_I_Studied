function and(arr) {
  if (arr.length === 0) return true;
  if (arr.length === 1) return arr[0];
  else {
    const tArr = [...arr];
    tArr.splice(0, 1);
    const boolean = and(tArr);
    return arr[0] && boolean;
  }
}

console.log(and([1, 1, 1, 1, 0, 1]));
