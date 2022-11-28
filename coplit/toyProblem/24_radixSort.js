function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  function compare(nums, funcDigit) {
    const buckets = new Array(10).fill(0).map(() => []);
    const minusBuckets = new Array(10).fill(0).map(() => []);
    const funcRes = [];
    for (let i of nums) {
      if (i < 0) {
        i *= -1;
        minusBuckets[9 - getDigitNum(i, funcDigit)].push(i);
      } else buckets[getDigitNum(i, funcDigit)].push(i);
    }
    for (let i of minusBuckets) {
      if (i.length > 0)
        for (let j of i) {
          funcRes.push(j * -1);
        }
    }
    for (let i of buckets) {
      if (i.length > 0)
        for (let j of i) {
          funcRes.push(j);
        }
    }

    if (Math.floor(max / 10 ** digit) === 0) return funcRes;
    digit++;
    return compare(funcRes, digit);
  }

  function getDigitNum(num, digit) {
    const modulus = num % 10 ** digit;
    return Math.floor(modulus / 10 ** (digit - 1));
  }

  const max = Math.max(...arr);
  let digit = 1;
  return compare(arr, digit);
}

console.log(radixSort([4, 1, 2, 5, 25, 15, 32]));
