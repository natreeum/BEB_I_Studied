const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  function findNum(row, column, arr) {
    const nums = [...arr];
    // find in row
    for (let i = 0; i < 9; i++) {
      const compareNum = board[row][i];
      if (nums.includes(compareNum)) {
        nums.splice(nums.indexOf(compareNum), 1);
      }
    }
    // find in column
    for (let i = 0; i < 9; i++) {
      const compareNum = board[i][column];
      if (nums.includes(compareNum)) {
        nums.splice(nums.indexOf(compareNum), 1);
      }
    }
    // find in 3by3
    for (
      let i = Math.floor(row / 3) * 3;
      i < Math.floor(row / 3 + 1) * 3;
      i++
    ) {
      for (
        let j = Math.floor(column / 3) * 3;
        j < Math.floor(column / 3 + 1) * 3;
        j++
      ) {
        //logic here
        const compareNum = board[i][j];
        if (nums.includes(compareNum)) nums.splice(nums.indexOf(compareNum), 1);
      }
    }
    if (nums.length === 1) return nums[0];
    return nums;
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0)
        board[i][j] = findNum(i, j, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  }
  console.log(board);
};

let board = [
  [0, 0, 7, 0, 0, 6, 0, 1, 0],
  [0, 4, 0, 0, 0, 0, 0, 9, 0],
  [8, 0, 0, 0, 5, 0, 6, 0, 4],
  [0, 1, 0, 0, 0, 5, 7, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 6, 0],
  [0, 0, 3, 0, 8, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 7, 4, 0, 5],
  [1, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9],
];
let output = sudoku(board);
// console.log(output);
