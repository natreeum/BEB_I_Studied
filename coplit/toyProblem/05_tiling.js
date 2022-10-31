let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  const arr = [1, 2];
  if (n === 1) return n;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
