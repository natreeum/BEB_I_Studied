const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i of arr) {
    sum += i;
    if (max < sum) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
};

let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])

output = LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7 ([1, 2, 3, -4, 5])

output = LSCS([10, -11, 11]);
console.log(output); // --> 11 ([11])
