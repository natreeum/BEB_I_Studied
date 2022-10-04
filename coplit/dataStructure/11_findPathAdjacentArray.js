function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.
  let visited = new Array(matrix.length).fill(false);

  let queue = [];
  queue.push(from);
  visited[from] = true;

  while (queue.length > 0) {
    let node = queue.pop();

    if (node === to) {
      return true;
    }
    for (let i = 0; i < matrix[node].length; i++) {
      if (matrix[node][i] === 1 && visited[i] === false) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
  return false;
}
