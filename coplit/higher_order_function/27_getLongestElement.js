function getLongestElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length == 0) {
    return "";
  }
  const res = arr.reduce((idx, el) => {
    const strLength = arr[idx].length;
    const elLength = el.length;
    if (strLength < elLength) {
      return arr.indexOf(el);
    } else {
      return idx;
    }
  }, 0);
  return arr[res];
}
let output = getLongestElement(["one", "two", "three"]);
console.log(output); // --> 'three'

output = getLongestElement(["one", "two", "wow"]);
console.log(output); // --> 'one'
