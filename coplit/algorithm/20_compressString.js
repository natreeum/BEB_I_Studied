function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let checkArr = [];
  let result = '';
  checkArr.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      checkArr.push(str[i]);
    }
    if (str[i] !== str[i - 1]) {
      if (checkArr.length >= 3) {
        result += String(checkArr.length) + checkArr[0];
      } else {
        for (let i of checkArr) {
          result += i;
        }
      }
      checkArr = [];
      checkArr.push(str[i]);
    }
    if (i === str.length - 1) {
      if (checkArr.length >= 3) {
        result += String(checkArr.length) + checkArr[0];
      } else {
        for (let i of checkArr) {
          result += i;
        }
      }
    }
  }
  return result;
}

let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p
