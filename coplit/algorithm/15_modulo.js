function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if (num2 === 0) {
    return 'Error: cannot divide by zero';
  }
  let cnt = 0;
  while (num1 >= num2 * (cnt + 1)) {
    cnt++;
  }
  return num1 - num2 * cnt;
}

let output = modulo(0, 4);
console.log(output); // --> 1
