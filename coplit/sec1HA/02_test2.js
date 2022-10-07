function test2(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0;
  if (num > 0) {
    while (num > 0) {
      result += num % 10;
      num = Math.floor(num / 10);
    }
  } else if (num < 0) {
    num = num * -1;
    while (num > 0) {
      if (Math.floor(num / 10) > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
      } else {
        result = result - num;
        num = Math.floor(num / 10);
      }
    }
  }
  return result;
}

let output = test2(10);
console.log(output); // --> 14 = 1 + 1 + 4 + 8

output = test2(-9);
console.log(output); // --> 4 = -3 + 1 + 6
