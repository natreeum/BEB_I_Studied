const coinChange = function (total, coins) {
  const makeChangeFrom = (left, idx) => {
    if (left === 0) return 1;

    let cnt = 0;
    for (let i = idx; i < coins.length; i++) {
      if (left - coins[i] >= 0) {
        cnt = cnt + makeChangeFrom(left - coins[i], i);
      }
    }
    return cnt;
  };
  return makeChangeFrom(total, 0);
};

let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3
