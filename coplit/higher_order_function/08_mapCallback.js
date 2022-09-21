function mapCallback(func, arr) {
  // TODO: 여기에 코드를 작성합니다.
  const res = [];
  for (i of arr) {
    res.push(func(i));
  }
  return res;
}
