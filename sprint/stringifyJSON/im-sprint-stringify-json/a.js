const unstringifiableValue = {
  functions: function () {},
  undefined: undefined,
};

function abc() {}
const expected = JSON.stringify(unstringifiableValue);
console.log(typeof expected);
