const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const negativeNum = [];
  let positiveCount = 0;
  for (let i of arr) {
    if (i < 0) negativeNum.push(i * -1);
    else positiveCount++;
  }
  if (negativeNum.length >= 2 && positiveCount != 0) {
    let largest = 0;
    negativeNum.sort((a, b) => a - b);
    for (let i of arr) {
      if (i > largest) {
        largest = i;
      }
    }
    return (
      largest *
      negativeNum[negativeNum.length - 1] *
      negativeNum[negativeNum.length - 2]
    );
  } else if (negativeNum.length >= 2 && positiveCount == 0) {
    const length = negativeNum.length;
    return (
      negativeNum[length - 1] *
      negativeNum[length - 2] *
      negativeNum[length - 3] *
      -1
    );
  } else {
    arr.sort((a, b) => a - b);
    const length = arr.length;
    return arr[length - 1] * arr[length - 2] * arr[length - 3];
  }
};

let output = largestProductOfThree([-5, -4, -3, -2, -1]);
console.log(output); // --> 42 (= 2 * 3 * 7)
