let output = returnFunction();
function returnFunction() {
  // TODO: 여기에 코드를 작성합니다.
  function returnMessage() {
    return "Hello HoF!";
  }
  return returnMessage;
}
console.log(output);
