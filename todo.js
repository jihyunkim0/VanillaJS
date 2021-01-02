const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TOTS_LS = "toDos";

//할 일을 화면에 띄우기 위해 저장해야 함.
//항목이 많으니까 array에 저장.
//toDos array생성(해야 할 일 생성될때 array에 추가)
const toDos = [];

function paintToDo(text) {
  //console.log(text);
  //평소에는 html에서 id를 얻었으나
  //js에서 만들 수 있다.
  //const는 potato여도 상관 없음
  const li = document.createElement("li"); //비어있는 li생성
  const delBtn = document.createElement("button"); //버튼 생성
  //[윈도우 + . (마침표)] =>이모지
  delBtn.innerText = "❌"; //value, innerHTML, innerText...
  /*
  //fontawesome에서 가져온 이모티콘 사용하고 싶을 때
  const emoji = document.createElement("i");
  emoji.classList.add("far fa-trash-alt");
  delBtn.innerHtml = `HTML_CODE_HERE`;
  */
  const span = document.createElement("span"); //span생성
  span.innerText = text; //text는 handleSubmit함수에서 온 currentValue
  li.appendChild(delBtn);
  //li 내 span 을 넣는 이유 : li 는 컨테이너고, 그 안에 "span인 text"와 "button" 이 들어간다.
  li.appendChild(span); //father element(li)에 span추가
  toDoList.appendChild(li); //li를 ul에 append(추가)
  const toDoObj = {
    text: text, // key : value
    id: toDos.length + 1, //초기값 undefined 대신 1을 넣음
  };
  toDos.push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //input에 엔터누르면 todo생성, input에 글자 사라짐. submit처럼 보임
  toDoInput.value = "";
}
function loadToDo() {
  const toDos = localStorage.getItem(TOTS_LS);
  //항상 보임. null일 때는 할 게 없음
  if (toDos !== null) {
  } else {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
