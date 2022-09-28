function isOdd(num) {
  if (num === 1) return true;
  if (num === 0) return false;
  if (num > 0) return isOdd(num - 2);
  if (num < 0) return isOdd(num + 2);
}

console.log(isOdd(-8));
