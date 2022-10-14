function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  const strArr = [];
  let result = "";
  for (let i of str) strArr.push(i);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " " && strArr[i + 1] === " ") continue;
    result += strArr[i];
  }
  return result;
}
