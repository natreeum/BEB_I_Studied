function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let max = 0;
  let min = 20;
  let maxIdx = 0;
  let minIdx = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= min) {
      min = arr[i].length;
      minIdx = i;
    }
    if (arr[i].length >= max) {
      max = arr[i].length;
      maxIdx = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i !== minIdx && i !== maxIdx) result.push(arr[i]);
  }
  return result;
}

let output = removeExtremes(['', '', '', 'eept', 'ssps', 'sss']);
console.log(output); // --> ['a', 'b']
