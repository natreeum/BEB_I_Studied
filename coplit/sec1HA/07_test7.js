function test7(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i of arr) {
    if (i.id === id) return i;
    if (i.children) {
      let a = test7(i.children, id);
      if (a) return a;
    }
  }
  return null;
}

let input = [
  {
    id: 1,
    name: "johnny",
  },
  {
    id: 2,
    name: "ingi",
    children: [
      {
        id: 3,
        name: "johnson",
      },
      {
        id: 5,
        name: "steve",
        children: [
          {
            id: 6,
            name: "lisa",
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: "13",
  },
];

let output = test7(input, 1);
console.log(output); // --> { id: 1, name: 'johnny' }

output = test7(input, 5);
console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

output = test7(input, 6);
console.log(output); // --> null
