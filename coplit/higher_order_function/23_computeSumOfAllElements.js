function computeSumOfAllElements(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.reduce((sum, el) => {
    return (sum = sum + el);
  }, 0);
}
