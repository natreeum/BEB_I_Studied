function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) return 0;
  let result = 0;
  let sum = 0;
  let arr = [];
  for (let i of str) {
    if (i.charCodeAt() <= 57 && i.charCodeAt() >= 48) {
      sum += Number(i);
    } else if (i === ' ') {
    } else arr.push(i);
  }
  result = Math.round(sum / arr.length);
  return result;
}

let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2
