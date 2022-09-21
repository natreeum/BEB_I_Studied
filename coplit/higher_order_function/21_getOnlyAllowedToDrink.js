function getOnlyAllowedToDrink(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr
    .filter((el) => {
      if (el.age >= 18) {
        return true;
      } else return false;
    })
    .map((el) => {
      return el.name;
    });
}
