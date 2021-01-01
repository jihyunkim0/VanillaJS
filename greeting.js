const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault(); //폼의 기본동작 enter막기
  const currentValue = input.value;
  console.log(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); //form에 입력하면 어디론가 전송됨.새로고침 그래서 폼을 사용함
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //텍스트 색칠할 때 폼 숨기기
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //user is not
    askForName(); //user의 이름 요청
  } else {
    //user is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
