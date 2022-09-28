Object.defineProperty(Array.prototype, "isEmpty", {
  value: function () {
    if (this.length == 0) return true;
  },
});

function arrLength(arr) {
  if (arr.isEmpty()) return 0;
  else {
    let tArr = [...arr];
    tArr.pop();
    return 1 + arrLength(tArr);
  }
}

console.log(arrLength([]));
