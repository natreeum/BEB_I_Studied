function test3(num) {
  // TODO: 여기에 코드를 작성합니다.
  const arr = [];
  if (num === 0) return num;
  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  let result = arr.reduce((res, el) => res * el, 1);
  if (Math.floor(result / 10) !== 0) return test3(result);
  else return result;
}

let output = test3(0);
console.log(output); // --> 0
