const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing"; //현재이름(CurrentName) 보여주기

//USER_LS local Storage
function savename(text) {
  localStorage.setItem(USER_LS, text);
}

//인풋에 들어온 text를 <h4>에 나타내게 하려고 함
//로직 -> 인풋에 들어온 이름을 로컬저장소에 넣고, 현재 값을 text로 보여주기
// 로컬에 저장하는 이유는 새로고침했을 때도 사용자 이름 남아있게(기억하게) 하기 위함.
// 이름을 바꾸고 싶다면 개발자모드 Application에 들어가서 key,value삭제하고 다시 입력
function handleSubmit(event) {
  event.preventDefault(); //폼의 기본동작 enter막기
  const currentValue = input.value; //인풋에 입력된 값을 현재 값 상수에 넣음
  //console.log(currentValue); //잘 작동하는 지 확인
  paintGreeting(currentValue);
  savename(currentValue);
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
