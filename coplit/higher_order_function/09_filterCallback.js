function filterCallback(func, arr) {
  // TODO: 여기에 코드를 작성합니다.
  res = [];
  for (let i of arr) {
    if (func(i)) {
      res.push(i);
    }
  }
  return res;
}
