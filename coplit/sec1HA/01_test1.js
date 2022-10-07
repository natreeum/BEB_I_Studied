function test1(str) {
  // TODO: 여기에 코드를 작성합니다.
  const splitedStr = str.split(" ");
  const result = {};
  if (str.length === 0 || str === " ") return result;
  const keys = [];
  for (let i of splitedStr) {
    if (!keys.includes(i.toLowerCase()) && i !== " " && i.length !== 0) {
      keys.push(i.toLowerCase());
    }
  }
  for (let i of keys) {
    let cnt = 0;
    for (let j of splitedStr) {
      if (i === j.toLowerCase()) cnt++;
    }
    result[i] = cnt;
  }
  return result;
}

let output = test1("a b c d C b A ");
console.log(output); // --> { ask: 1, a: 3, bunch: 3, try: 1, get: 1 }
