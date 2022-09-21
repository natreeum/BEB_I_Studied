function compose2(func1, func2) {
  // TODO: 여기에 코드를 작성합니다.
  return function (num) {
    return func1(func2(num));
  };
}

function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

const output = compose2(square, add5);
console.log(output(2));
