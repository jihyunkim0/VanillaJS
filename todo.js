const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//할 일을 화면에 띄우기 위해 저장해야 함.
//항목이 많으니까 array에 저장.
//toDos array생성(해야 할 일 생성될때 array에 추가)
const toDos = [];

//toDos array를 가져와서 로컬에 저장하는 일을 함
//결과는 Key, Value에서 Value가 object..로 뜸
//로컬저장소에서는 js의 data를 저장할 수 없음.
// 오직 string만 저장할 수 있음
//그래서 js date object가 string이 되도록 만들어야 함.
//방법은 JSON.stingify (트릭??)
// js object를 string으로 바꿔줌
function saveToDos() {
  //저장했기 때문에 새로고침해도 안 사라짐
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //toDo보여주는 함수
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
  const newId = toDos.length + 1; // length와 id 인덱스를 맞추기 위해서..? 처음 length는 0이다. 뭔갈 넣으면 1인데, 인덱스 처음 값은 0이니까 넣었을 때 1이 되게 하려고..???
  span.innerText = text; //text는 handleSubmit함수에서 온 currentValue
  li.appendChild(delBtn);
  //li 내 span 을 넣는 이유 : li 는 컨테이너고, 그 안에 "span인 text"와 "button" 이 들어간다.
  li.appendChild(span); //father element(li)에 span추가
  //li에도 id부여, 클릭했을 때 뭐가 몇 번인지 알아야 하니까
  li.id = newId;
  toDoList.appendChild(li); //li를 ul에 append(추가)
  const toDoObj = {
    text: text, // key : value
    id: newId, //
  };
  toDos.push(toDoObj); //toDos에 넣고
  saveToDos(); // 로컬저장소에 저장, 순서바뀌면 안 됨
} //toDo에 아이디 지정하는 이유 : 로컬저장소에도 저장해야 하므로

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //input에 엔터누르면 todo생성, input에 글자 사라짐. submit처럼 보임
  toDoInput.value = "";
}

//toDos 불러오기s
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  //항상 보임. null일 때는 할 게 없음
  if (loadedToDos !== null) {
    //불러온 ToDos는 String형식.
    //다시 object로 바꿔야 함
    // JSON은 js object notation의 준말로,
    //데이터 전달 할 때 js가 그걸 다룰 수 있도록 object로 바꿔주는 기능
    //js의 object를 string으로 변환하기도 하고, string을 object로 변환해줄 수도 있다.
    console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    //console.log(parsedToDos);
    //parsedToDos에 있는 것들을 paintToDo()을 통해 화면에 보이려고 한다.
    //그 전에 forEach로 array에서 하나씩 꺼내 함수를 실행하려 한다.

    //바로 만들어서 사용해도 되고, 밖에다 만들어서 써도 됨
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
    //array, string, object ... 각각의 function이 있다. 상황에 맞게 활용하면 된다.
    // parsedToDos.forEach(something);
  } else {
  }
}

/*
function something(toDo) {
  console.log(toDo.text);
}
*/

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
