let gdiscarder = null;

const checkDiscarder = function (el) {
  return el != gdiscarder;
};

function removeElement(arr, discarder) {
  // TODO: 여기에 코드를 작성합니다.
  let res = [];
  gdiscarder = discarder;
  res = arr.filter(checkDiscarder);
  return res;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

/*
function removeElement(arr, discarder) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.filter((el)=>{
    if(el!==discarder) return true;
    else return false;
  })
}
*/
