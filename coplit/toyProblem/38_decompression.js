const decompression = function (image) {
  let result = '';
  function compress(image) {
    if (image.every((row) => row.every((cell) => cell === 1))) return 1;
    if (image.every((row) => row.every((cell) => cell === 0))) return 0;
    return 'X';
  }

  const compressRes = compress(image);
  if (compressRes === 1 || compressRes === 0) result += compressRes;
  else {
    result += compressRes;
    if (image.length === 1) return image[0][0];
    const n = image.length / 2;
    const topLeft = image.slice(0, n).map((row) => row.slice(0, n));
    const topRight = image.slice(0, n).map((row) => row.slice(n));
    const bottomLeft = image.slice(n).map((row) => row.slice(0, n));
    const bottomRight = image.slice(n).map((row) => row.slice(n));
    result +=
      decompression(topLeft) +
      decompression(topRight) +
      decompression(bottomLeft) +
      decompression(bottomRight);
  }
  return result;
};

let image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'
