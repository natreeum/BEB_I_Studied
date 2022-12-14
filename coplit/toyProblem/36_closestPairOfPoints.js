// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.floor(Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2)) * 100);
}

const mergeSort = (points) => {
  const merge = (leftArr, rightArr) => {
    const result = [];
    while (leftArr.length != 0 && rightArr.length != 0) {
      if (leftArr[0][0] < rightArr[0][0]) {
        result.push(leftArr.shift());
      } else result.push(rightArr.shift());
    }
    return result.concat(leftArr, rightArr);
  };
  if (points.length <= 1) return points;
  const mid = Math.floor(points.length / 2);
  const leftArr = points.slice(0, mid);
  const rightArr = points.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
  const sortedPoints = mergeSort(points);
  let sumOfX = 0;
  for (let i of sortedPoints) {
    sumOfX += i[0];
  }
  const mid = Math.floor(sumOfX / points.length);
  const leftArr = points.slice(0, mid);
  const rightArr = points.slice(mid);

  let leftMinDist = Number.MAX_SAFE_INTEGER;
  let rightMinDist = Number.MAX_SAFE_INTEGER;

  if (leftArr.length > 2) {
    leftMinDist = closestPairOfPoints(leftArr);
  }
  if (rightArr.length > 2) {
    rightMinDist = closestPairOfPoints(rightArr);
  }
  if (leftArr.length <= 2 && rightArr.length <= 2) {
    if (leftArr.length === 2) {
      leftMinDist = calculateDistance(leftArr[0], leftArr[1]);
    }
    if (rightArr.length === 2) {
      rightMinDist = calculateDistance(rightArr[0], rightArr[1]);
    }
    const minDist = Math.floor(Math.min(leftMinDist, rightMinDist) / 100);
    const midPoints = [];
    for (let i of points) {
      if (i[0] <= mid + minDist && i[0] >= mid - minDist) {
        midPoints.push(i);
      }
    }
    let midMinDist = Number.MAX_SAFE_INTEGER;
    if (!midPoints.length === points.length) {
      midMinDist = closestPairOfPoints(midPoints);
    }
    return Math.min(leftMinDist, rightMinDist, midMinDist);
  }
};

let points = [
  [0, 0],
  [1, 3],
  [2, 2],
];
let output = closestPairOfPoints(points);
console.log(output); // --> 141 ([1, 3], [2, 2])
/*
3 |  x
2 |     x
1 |       
0 | x 
------------
    0 1 2 3 
*/

points = [
  [1, 0],
  [3, 3],
  [4, 5],
];
output = closestPairOfPoints(points);
console.log(output); // --> 100 ([0, 0], [0, 1])
/*
5 |         x
4 | 
3 |       x
2 |     
1 |     
0 |   x
----------------
    0 1 2 3 4 5
*/
