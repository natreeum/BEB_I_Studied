// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector("#username");
let elInputPassword = document.querySelector("#password");
let elInputPasswordRetype = document.querySelector("#password-retype");
let elPasswordMismatchMessage = document.querySelector(".mismatch-message");
let elPasswordMatchMessage = document.querySelector(".match-message");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

function noText() {
  elFailureMessage.classList.add("hide");
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if (password1 == password2) {
    return true;
  } else return false;
}

elInputUsername.onkeyup = () => {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
    if (elInputUsername.value.length == 0) {
      noText();
    }
  }
};

//비밀번호 확인 입력창에서 값을 입력(keyup)하면
elInputPasswordRetype.onkeyup = () => {
  //비밀번호 값과 비밀번호 확인 값이 일치하는지 확인하고
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elPasswordMatchMessage.classList.remove("hide");
    elPasswordMismatchMessage.classList.add("hide");
  }
  //일치하지 않은 경우, 불일치 메세지를 화면에 표시
  else {
    elPasswordMatchMessage.classList.add("hide");
    elPasswordMismatchMessage.classList.remove("hide");
    if (elPasswordMismatchMessage.value.length == 0) {
      elPasswordMismatchMessage.classList.add("hide");
      elPasswordMatchMessage.classList.add("hide");
    }
  }
};
