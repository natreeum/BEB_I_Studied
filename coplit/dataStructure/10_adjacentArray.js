function createMatrix(edges) {
  // TODO: 여기에 코드를 작성합니다.
  const result = [];
  let bigNum = 0;
  for (let i of edges) {
    if (i[0] > i[1]) {
      if (i[0] > bigNum) bigNum = i[0];
    } else {
      if (i[1] > bigNum) bigNum = i[1];
    }
  }
  for (let i = 0; i < bigNum + 1; i++) {
    result.push(Array(bigNum + 1).fill(0));
  }
  edges.forEach((e) => {
    if (e[2] === "directed") {
      result[e[0]][e[1]] = 1;
    } else if (e[2] === "undirected") {
      result[e[0]][e[1]] = 1;
      result[e[1]][e[0]] = 1;
    }
  });
  return result;
}

const output1 = createMatrix([
  [0, 3, "directed"],
  [0, 2, "directed"],
  [1, 3, "directed"],
  [2, 1, "directed"],
]);

console.log(output1);
/**
 * [
 *  [0, 0, 1, 1],
 *  [0, 0, 0, 1],
 *  [0, 1, 0, 0],
 *  [0, 0, 0, 0]
 * ]
 */
