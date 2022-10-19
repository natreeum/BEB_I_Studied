function readVertically(arr) {
  // code goes here
  let result = '';
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) maxLength = arr[i].length;
  }
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) result += arr[j][i];
    }
  }
  return result;
}
let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'
