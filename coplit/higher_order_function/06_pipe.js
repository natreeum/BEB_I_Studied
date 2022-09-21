function pipe() {
  // TODO: 여기에 코드를 작성합니다.
  const args = arguments;
  return function (num) {
    let calcNum = num;
    for (let i = 0; i < args.length; i++) {
      calcNum = args[i](calcNum);
    }
    return calcNum;
  };
}
