function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  const init = 100;
  let balance = init;
  let result = 0;
  while (balance < init * 2) {
    balance = (balance * (100 + interestRate)) / 100;
    result++;
  }
  return result;
}

let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
