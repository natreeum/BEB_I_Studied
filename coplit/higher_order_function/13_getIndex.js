function getIndex(arr, num) {
  // TODO: 여기에 코드를 작성합니다.
  let sum = 0;
  function func(init, el) {
    if (num > el) init = init + 1;
    return init;
  }
  return arr.reduce(func, sum);
}

let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

output = getIndex([10, 5, 1, 3], 13);
console.log(output); // --> 4
