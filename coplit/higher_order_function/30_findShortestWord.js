function findShortestWord(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.reduce((a, b) => {
    if (typeof b === "string") {
      return a === "" ? b : a.length > b.length ? b : a;
    } else return a;
  }, "");
}

let output = findShortestWord(["word", 3, 5, 3, "yo", "up", 1, 5]);
console.log(output); // --> 'two'
