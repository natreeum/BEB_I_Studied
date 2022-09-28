function and(arr) {
  if (arr.length === 0) return true;
  else {
    const tArr = [...arr];
    tArr.splice(0, 1);
    const boolean = and(tArr);
    return arr[0] && boolean;
  }
}

console.log(and([1, false, 1, 1, 1, 1]));
