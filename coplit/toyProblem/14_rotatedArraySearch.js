const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let min = 0;
  let max = rotated.length;

  while (1) {
    let midIndex = Math.floor((min + max) / 2);
    if (rotated[midIndex] === target) return midIndex;
    if (rotated[midIndex] > target) {
      max = midIndex - 1;
    }
    if (rotated[midIndex] < target) {
      if (rotated[rotated.length - 1] < target) max = midIndex - 1;
      else min = midIndex + 1;
    }
    if (rotated[midIndex] === undefined) return -1;
  }
};

let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
