function test5(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const data = {};
  let keys = [];
  const res = [];
  for (let i of arr) {
    let name = "";
    let age = 0;
    for (let j of i) {
      if (j[0] === "firstName") name += j[1];
      if (j[0] === "lastName") {
        if (name.length !== 0) name += " ";
        name += `${j[1]}`;
      }
      if (j[0] === "age") age = j[1];
    }
    data[age] = name;
  }
  console.log(data);
  keys = Object.keys(data).map((e) => Number(e));
  keys.sort((a, b) => a - b);
  console.log(keys);
  for (let i of keys) {
    res.push(data[i]);
  }
  return res;
}

let list = [
  [
    ["firstName", "Joe"],
    ["age", 42],
    ["gender", "male"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["gender", "female"],
  ],
  [
    ["lastName", "Kim"],
    ["age", 40],
    ["gender", "female"],
  ],
];

let output = test5(list);
console.log(output);
