function classicMovies(arr, year) {
  // TODO: 여기에 코드를 작성합니다.
  return arr
    .filter((el) => {
      if (year > el.year) {
        return true;
      } else return false;
    })
    .map((el) => {
      return `${el.title} by ${el.director}`;
    });
}
