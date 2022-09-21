function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  if (Array.isArray(obj[property])) {
    return obj[property].map((el) => {
      return square(el);
    });
  } else return [];
}

const obj = {
  key: [2, 1, 5],
};

let output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]
