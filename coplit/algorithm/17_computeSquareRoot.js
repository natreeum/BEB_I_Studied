function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  let x = 1;
  while (x ** 2 !== num) {
    if (Number((x * x).toFixed(2)) === num) break;
    x = (x + num / x) / 2;
  }
  return Number(x.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45
