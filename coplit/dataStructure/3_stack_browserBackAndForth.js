function browserStack(actions, start) {
  // TODO: 여기에 코드를 작성합니다.
  if (typeof start !== "string") return false;
  let prev = [];
  let next = [];
  let present = start;
  for (let i of actions) {
    if (i === -1 && prev.length != 0) {
      next.push(present);
      const presSite = prev.pop();
      present = presSite;
    } else if (i === 1 && next.length != 0) {
      prev.push(present);
      const presSite = next.pop();
      present = presSite;
    } else if (typeof i === "string") {
      prev.push(present);
      next = [];
      present = i;
    }
  }
  return [prev, present, next];
}

const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output);
