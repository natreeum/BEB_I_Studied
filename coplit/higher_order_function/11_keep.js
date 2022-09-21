function keep(arr, keeper) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.filter((el) => {
    if (el === keeper) return 1;
    else return 0;
  });
}
