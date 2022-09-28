function or(arr) {
  if (arr.length === 0) return false;
  else {
    const tArr = [...arr];
    tArr.splice(0, 1);
    const boolean = or(tArr);
    return arr[0] || boolean;
  }
}

console.log(or([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
