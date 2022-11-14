const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let min = 0;
  let max = rotated.length - 1;

  while (min <= max) {
    const midIndex = Math.floor((min + max) / 2);
    if (rotated[midIndex] === target) return midIndex;
    // mid index is in right side Array
    if (rotated[midIndex] <= rotated[max]) {
      if (rotated[midIndex] < target && rotated[max] >= target) {
        min = midIndex + 1;
      } else max = midIndex - 1;
    }
    // mid index is in left side Array
    else {
      if (rotated[midIndex] > target && rotated[min] <= target) {
        max = midIndex - 1;
      } else min = midIndex + 1;
    }
  }
  return -1;
};

let output = rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1);
console.log(output); // --> -1
