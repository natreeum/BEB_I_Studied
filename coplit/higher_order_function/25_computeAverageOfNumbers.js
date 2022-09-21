function computeAverageOfNumbers(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return 0;
  else
    return (
      arr.reduce((sum, el) => {
        return (sum += el);
      }, 0) / arr.length
    );
}
