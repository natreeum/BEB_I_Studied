function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = false;
  let calcNum = 1;
  while (calcNum <= num) {
    if (calcNum === num) result = true;
    calcNum *= 2;
  }
  return result;
}

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false
