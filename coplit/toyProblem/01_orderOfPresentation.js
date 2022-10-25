function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0;
  let nums = []; //1,2,3,4,5

  // factorial function
  function fact(num) {
    if (num <= 1) return num;
    return fact(num - 1) * num;
  }

  // 1부터 N까지 순서대로 들어있는 배열
  for (let i = 1; i <= N; i++) {
    nums.push(i);
  }

  for (let i = 1; i <= N; i++) {
    let cnt = 0;
    for (let j = 0; j < nums.length; j++) {
      if (K[i - 1] > nums[j]) cnt++;
    }
    for (let j of nums) {
      if (K[i - 1] === j) {
        nums.splice(nums.indexOf(j), 1);
      }
    }
    result += cnt * fact(N - i);
  }
  return result;
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
