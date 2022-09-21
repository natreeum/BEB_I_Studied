function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  if (Array.isArray(obj[property])) {
    return obj[property].filter((el) => {
      if (typeof el == "number") return lessThan100(el);
      else return false;
    });
  } else return [];
}

const obj = {
  arr: ["99", 2, true],
};

let output = getElementsLessThan100AtProperty(obj, "arr");
console.log(output); // --> [20, 50]
