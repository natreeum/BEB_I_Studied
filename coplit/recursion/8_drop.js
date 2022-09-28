function drop(num, arr) {
  if (num > arr.length) return [];
  if (num === 0) return arr;
  else {
    let tArr = [...arr];
    tArr.splice(0, 1);

    return drop(num - 1, tArr);
  }
}

console.log(drop(10, [1, 2, 3, 4, 5, 6]));
