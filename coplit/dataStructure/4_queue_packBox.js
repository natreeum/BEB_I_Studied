function paveBox(boxes) {
  let res = 0;
  while (boxes.length != 0) {
    let fThing = boxes[0];
    let cnt = 0;
    while (boxes[0] <= fThing) {
      boxes.shift();
      cnt++;
    }
    if (cnt > res) res = cnt;
  }
  return res;
}

const boxes = [5, 1, 4, 6];
const output = paveBox(boxes);
console.log(output); // 3
