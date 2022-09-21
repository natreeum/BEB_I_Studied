let elInputUsername = document.querySelector("#username");

let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

const elInputUserId = document.querySelector("#username");
//아이디 입력창에 글자를 키보드로 입력할 때
elInputUserId.onkeyup = function () {
  //글자 수가 4개 이상이면
  if (elInputUserId.value.length >= 4) {
    //사용할 수 있는 아이디 입니다. 메세지 출력(success-message 에서 hide 클래스 제거, failure-message 에 hide 클래스 추가)
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  }
  //아닐 경우 아이디는 네 글자 이상이어야 합니다. 메세지 출력 (success-message 에 hide 클래스 추가, failure-message 에서 hide 클래스 삭제)
  else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }
};

const elInputPassword = document.querySelector("#password");
const elInputPasswordRetype = document.querySelector("#passwordRetype");
const elMismatchMessage = document.querySelector(".misMatch-message");
const elMatchmessage = document.querySelector(".match-message");
//비밀번호 확인 입력창에 글자를 키보드로 입력할 때
elInputPasswordRetype.onkeyup = function () {
  //비밀번호가 일치 하면
  if (elInputPassword.value === elInputPasswordRetype.value) {
    //메세지 가리기(elMismatchMessage에 hide 클래스 추가)
    elMismatchMessage.classList.add("hide");
  }
  //메세지 출력
  else {
    elMismatchMessage.classList.remove("hide");
  }
};
