const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const bracketCheckStack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i of str) {
    if (Object.values(brackets).includes(i)) {
      bracketCheckStack.push(i);
    }
    if (Object.keys(brackets).includes(i)) {
      if (bracketCheckStack[bracketCheckStack.length - 1] !== brackets[i]) {
        return false;
      }
      bracketCheckStack.pop();
    }
  }
  return bracketCheckStack.length === 0;
};

let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('(())');
console.log(output); // --> true

output = balancedBrackets('[](){}');
console.log(output); // --> true

output = balancedBrackets('[({})]');
console.log(output); // --> true

let output3 = balancedBrackets('[(]{)}');
console.log(output3); // --> false
