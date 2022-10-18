function ABCheck(str) {
  const strToArr = [];
  for (let i of str) {
    strToArr.push(i.toLowerCase());
  }
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === 'a') {
      if (strToArr[i + 4] === 'b') return true;
    }
    if (strToArr[i] === 'b') {
      if (strToArr[i + 4] === 'a') return true;
    }
  }
  return false;
}

let output = ABCheck('aMAJ7sBrO4CyysuoHFrgGTX');
console.log(output);
