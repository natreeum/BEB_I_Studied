const rotateMatrix = function (matrix, k) {
  // TODO: 여기에 코드를 작성합니다.
  if (!k) k = 1;
  if (matrix.length === 0) return [];
  const result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const arr = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      arr.push(matrix[j][i]);
    }
    result.push(arr);
  }
  if (k === 1) return result;
  return rotateMatrix(result, k - 1);
};

console.log(
  rotateMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);
