function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function test4(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const ulEl = document.querySelector("#container");
  console.log(ulEl);
  for (let i of arr) {
    const tmpLi = document.createElement("li");
    const tmpAEl = document.createElement("a");
    tmpAEl.setAttribute("class", "name");
    tmpAEl.textContent = `${i.firstName} ${i.lastName}`;
    const tmpDivEl = document.createElement("div");
    tmpDivEl.setAttribute("class", "age");
    tmpDivEl.textContent = `${i.age}`;
    tmpLi.appendChild(tmpAEl);
    tmpLi.appendChild(tmpDivEl);
    ulEl.appendChild(tmpLi);
    tmpAEl.onclick = () => {
      printRole(i);
    };
  }
}
let list = [
  { firstName: "Joe", lastName: "Blow", age: 42, role: "clerk" },
  { firstName: "Mary", lastName: "Jenkins", age: 36, role: "manager" },
];

test4(list);
