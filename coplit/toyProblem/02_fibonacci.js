function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  let num1 = 0;
  let num2 = 1;
  let cnt = 0;
  if (n == 0 || n == 1) return n;
  const fib = () => {
    if (cnt === n) return num1;
    let tmp = Number(num1);
    num1 = num2;
    num2 += tmp;
    cnt++;
    return fib();
  };
  return fib();
}

console.log(fibonacci(9));
