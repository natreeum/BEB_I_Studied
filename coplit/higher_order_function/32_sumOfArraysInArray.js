function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr
    .reduce((nArr, el) => {
      el.forEach((e) => {
        nArr.push(e);
      });
      return nArr;
    }, [])
    .reduce((sum, el) => {
      if (typeof el === "number") return sum + el;
      else return sum;
    }, 0);
}
