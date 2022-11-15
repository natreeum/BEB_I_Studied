const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (i * i > num) break;
      if (num % i === 0) return false;
    }
    return true;
  };

  const numToArr = (num) => {
    let arr = [];
    arr[0] = Math.floor(num / 1000);
    num = num % 1000;
    arr[1] = Math.floor(num / 100);
    num = num % 100;
    arr[2] = Math.floor(num / 10);
    num = num % 10;
    arr[3] = num;
    return arr;
  };

  const arrToNum = (arr) => {
    return Number(arr.join(''));
  };

  let cnt = 0;
};

console.log(primePassword(1, 1));
