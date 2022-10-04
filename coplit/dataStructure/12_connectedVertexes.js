function connectedVertices(edges) {
  let len = Math.max(...edges.flat());
  let matrix = new Array(len + 1).fill().map((el) => Array(len + 1).fill(0));

  edges.forEach((i) => {
    matrix[i[0]][i[1]] = 1;
    matrix[i[1]][i[0]] = 1;
  });

  let queue = [];
  let visited = new Array(len + 1).fill(false);
  let result = 0;
  let node = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (visited[i] == true) continue;
    queue.unshift(i);
    visited[node] = true;
    while (queue.length > 0) {
      node = queue.shift();
      for (let j = 0; j < matrix[node].length; j++) {
        if (matrix[node][j] === 1 && visited[j] === false) {
          visited[j] = true;
          queue.unshift(j);
        }
      }
    }
    result += 1;
  }
  return result;
}
