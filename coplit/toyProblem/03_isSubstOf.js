const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  for (let i of base) {
    if (i === sample[0]) sample.shift();
  }
  if (sample.length === 0) return true;
  else return false;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
