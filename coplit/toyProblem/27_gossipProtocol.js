const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  village = createMatrix(village);
  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isInScope(x, y) {
    return x >= 0 && x < village.length && y >= 0 && y < village[0].length;
  }

  village[row][col] = 0;
  queue.push([[row, col], 0]);
  let result = 0;
  while (queue.length != 0) {
    const current = queue.shift();
    const [x, y] = current[0];
    for (let i = 0; i < 4; i++) {
      const tmpX = x + dx[i];
      const tmpY = y + dy[i];
      if (isInScope(tmpX, tmpY) && village[tmpX][tmpY] === '1') {
        village[tmpX][tmpY] = 0;
        queue.push([[tmpX, tmpY], current[1] + 1]);
      }
    }
    result = current[1];
  }
  return result;
};

let village = [
  '0101', // 첫 번째 줄
  '0111',
  '0110',
  '0100',
];
let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output);
