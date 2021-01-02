const body = document.querySelector("body");

//사용할 이미지 개수
const IMG_NUMBER = 3;

// API사용중이라면 이렇게...?
// function handleImgLoad() {
//   console.log("finished loading");
// }

//이미지 가져오는 함수
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`; // +1은 random함수가 0을 줄 수 있기 때문. 1을 넣으면 첫번째, ...
  image.classList.add("bgImage");
  body.appendChild(image); //이미지가 너무 크게 보임...

  //   //속임수??(로딩빨라짐) table listemer를 이미지화 하기 위해 even listener를 연결
  //   image.addEventListener("loadend", handleImgLoad);
}
//이미지 랜덤으로 불러오는 함수
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

//초기화할 함수
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
