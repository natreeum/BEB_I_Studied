function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
function test6() {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  function a() {
    count++;
    return fib(count - 1);
  }
  console.log(count);
  return a;
}
