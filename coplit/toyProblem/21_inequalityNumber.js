const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  const signsToArr = signs.split(' '); // [>, <, >]
  let maxIdx = [];
  let minIdx = [];
  const max = [9];
  const min = [0];
  for (let i = 0; i < signsToArr.length; i++) {
    if (signsToArr[i] === '>') {
      // max Logic
      maxIdx = [];
      let maxNum = max[i];
      while (max.includes(maxNum)) maxNum--;
      max[i + 1] = maxNum;

      // min Logic
      minIdx.push(i);
      for (let j of minIdx) min[j]++;
      min[i + 1] = min[i] - 1;
    }
    if (signsToArr[i] === '<') {
      // max Logic
      maxIdx.push(i);
      for (let j of maxIdx) max[j]--;
      max[i + 1] = max[i] + 1;

      // min Logic
      minIdx = [];
      let minNum = min[i];
      while (min.includes(minNum)) minNum++;
      min[i + 1] = minNum;
    }
  }
  return Number(max.join('')) - Number(min.join(''));
};

let output = inequalityNumber('<');
console.log(output); // --> 88 (89 - 01)

output = inequalityNumber('< >');
console.log(output); // --> 876 (897 - 021)

output = inequalityNumber('> < >');
console.log(output); // --> 8,754 (9,786 - 1,032)
