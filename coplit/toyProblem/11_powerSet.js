const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let elements = [];
  for (let i of str) {
    if (!elements.includes(i)) {
      elements.push(i);
    }
  }
  elements.sort();
  const result = [''];

  const make = function (arr, char, arrToStr) {
    arrToStr.push(char);
    arr.splice(arr.indexOf(char), 1);
    const madeStr = arrToStr.sort().join('');
    if (!result.includes(madeStr)) result.push(arrToStr.join(''));
    for (let i of arr) {
      make([...arr], i, [...arrToStr]);
    }
  };
  for (let i of elements) {
    make([...elements], i, []);
  }
  return result;
};

console.log(powerSet('abc'));
