function filterOddLengthWords(words) {
  // TODO: 여기에 코드를 작성합니다.
  return words.filter((el) => {
    if (el.length % 2 == 1) return true;
  });
}
