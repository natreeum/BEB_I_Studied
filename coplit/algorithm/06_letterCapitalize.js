function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  let j = 0;
  for (let i of str) {
    if (i === " ") {
      result += " ";
      j = 0;
      continue;
    }
    if (j === 0) {
      result += i.toUpperCase();
    } else {
      result += i;
    }
    j++;
  }
  return result;
}
console.log(letterCapitalize("    ").length);
