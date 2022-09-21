function functionParameter(func, num) {
  // TODO: 여기에 코드를 작성합니다.
  return func(num);
}

function square(num) {
  return num * num;
}

const output = functionParameter(square, 5);
console.log(output);
