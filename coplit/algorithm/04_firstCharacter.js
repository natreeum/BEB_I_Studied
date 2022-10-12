function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  if (str.length > 1) {
    const dividedStr = str.split(" ");
    for (let i of dividedStr) {
      result += i[0];
    }
  }

  return result;
}

let output = firstCharacter("");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"
