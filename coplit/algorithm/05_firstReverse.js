function firstReverse(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  let tmp = [];
  for (let i of str) {
    tmp.push(i);
  }
  tmp.reverse();
  for (let i of tmp) {
    result += i;
  }
  return result;
}

console.log(firstReverse(`hello my name is`));
