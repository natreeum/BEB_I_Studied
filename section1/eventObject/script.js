let menus = document.querySelectorAll("button");

for (i of menus) {
  i.onclick = handleClick;
}

function handleClick(event) {
  // console.log(event);
  let currentMenu = this.textContent;
  console.log(`${currentMenu}를 클릭하셨습니다.`);
}
