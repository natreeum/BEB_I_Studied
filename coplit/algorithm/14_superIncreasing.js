function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sum = arr[0];
  let result = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) result = false;
    sum += arr[i];
  }
  return result;
}
let output = superIncreasing([979, 1737, -2146, -337, 1316]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false
