function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  const checkArr = [];
  for (let i of str) {
    if (checkArr.includes(i.toLowerCase())) return false;
    checkArr.push(i.toLowerCase());
  }
  return true;
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false
