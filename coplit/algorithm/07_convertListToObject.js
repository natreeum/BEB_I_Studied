function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const result = {};
  for (let i of arr) {
    if (i.length != 0) {
      const keys = Object.keys(result);
      if (keys.includes(i[0])) continue;
      result[i[0]] = i[1];
    }
  }
  return result;
}
const arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", "1964"],
  ["make", "Bill"],
];

let output = convertListToObject(arr);

console.log(output); // -->
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : '1964'
// }
