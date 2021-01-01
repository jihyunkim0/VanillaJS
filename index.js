//let은 변수 선언(선언, 초기화, 사용)
//const는 상수 선언 (가본)
//var 변수 선언 (규칙)
/*
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

//  Array에는 뭐든지 들어감
const something = "something";
const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  54,
  true,
  something,
];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);

//Object 생성 (원하는 순서, 데이터 출력)
const jihInfo = {
  name: "Jihyun",
  age: "55",
  gender: "Female",
  isHandsome: true,
  //Object안에 array
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    //array안에 Object
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true },
  ],
};
//list내용 바꾸기
console.log(jihInfo.gender);
jihInfo.gender = "Male";
console.log(jihInfo.gender);

//Object출력
console.log(jihInfo);

//함수 사용하기
//potato는 인자(argument, parameter)
function sayHello(name, age) {
  console.log("Hello!", name, "you have", age, "years of age.");
}

sayHello("Jihyun", 21);

//문자열 대신 string벡틱 사용
function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetJihyun = sayHello("Jihyun", 21);

//greetJihyun은 sayHello의 반환값이라서
//sayHello에서 retrun값이 없으면 undefined뜸
console.log(greetJihyun);

// 객체(Object) 안에 함수 만들기
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus);

//html에서 요소 가져와서 Object(객체)로 변경 DOM
//const title = document.getElementById("title");

//title선택
const title = document.querySelector("#title");
title.innerHTML = "Hi, From JS";
//title.style.color = "blue";
document.title = "I own you now";
console.dir(document);

//윈도우 창 크기 변하면 콘솔 출력
function handleResize() {
  console.log("I have been resized");
}
//이벤트 받기를 기다림(listen to event)
//handleResize()는 즉시호출, handleResize는 이벤트 발생 시 호출
window.addEventListener("resize", handleResize);
*/

//title 클릭하면 이벤트 발생
//현재 색 = 베이스 색 => 다른 색, 현재 색 != 베이스색 => 베이스색
//이벤트의 근원 MDN
const title = document.querySelector("#title");
/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  //현재 색깔 출력
  //console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

//함수초기화
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
*/

//클힉하면 요소의 클래스 변함
const CLICKED_CLASS = "clicked";

/*
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS); //이게 없으면 클래스가 없어지게 됨
  }
}
*/

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
