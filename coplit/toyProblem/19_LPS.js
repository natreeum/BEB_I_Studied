const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const midIdx = Math.floor(str.length / 2);
  const front = str.slice(0, midIdx).split('');
  const back = str.slice(midIdx, str.length).split('');

  if (str.length % 2 === 1) back.splice(0, 1);
  while (front.length > 0) {
    if (front.join('') === back.join('')) {
      return front.length;
    }
    front.splice(front.length - 1);
    back.splice(0, 1);
  }
  return front.length;
};

let output = LPS('abbbcc');
console.log(output); // --> 0

output = LPS('aaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS('aaaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.
