function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  const arr = str.split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]}`;
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) result += '-';
  }
  return result;
}

const output = insertDash('454793');
console.log(output);
