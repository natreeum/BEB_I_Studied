const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  matrix.push(new Array(matrix[0].length).fill(''));
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].push('');
  }
  let result = '';
  const visited = [];
  const rotate = (coord) => {
    //right
    while (matrix[coord[0]][coord[1]] && !visited.includes(coord.join(''))) {
      visited.push(coord.join(''));
      result += matrix[coord[0]][coord[1]++];
    }
    coord[0]++;
    coord[1]--;
    //down
    while (
      matrix[coord[0]][coord[1]] !== '' &&
      !visited.includes(coord.join(''))
    ) {
      visited.push(coord.join(''));
      result += matrix[coord[0]++][coord[1]];
    }
    coord[0]--;
    coord[1]--;
    //left
    while (matrix[coord[0]][coord[1]] && !visited.includes(coord.join(''))) {
      visited.push(coord.join(''));
      result += matrix[coord[0]][coord[1]--];
    }
    coord[0]--;
    coord[1]++;
    //up
    while (matrix[coord[0]][coord[1]] && !visited.includes(coord.join(''))) {
      visited.push(coord.join(''));
      result += matrix[coord[0]--][coord[1]];
    }
    coord[0]++;
    coord[1]++;

    if (visited.length !== (matrix.length - 1) * (matrix[0].length - 1))
      return rotate(coord);
  };
  rotate([0, 0]);
  return result;
};

let matrix = [
  ['A', 'B', 'C', 'S'],
  ['D', 'E', 'F', 'S'],
  ['G', 'H', 'I', 'S'],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'
matrix = [
  ['I', "'", 'm', ' ', 'a', ' ', 's', 'l'],
  ['t', ' ', 'I', ' ', 'n', 'e', 'v', 'o'],
  ['u', ' ', 'b', 'a', 'c', 'k', 'e', 'w'],
  ['b', 'k', 'l', 'a', 'w', ' ', 'r', ' '],
  [' ', ',', 'r', 'e', 'k', 'l', 'a', 'w'],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'
