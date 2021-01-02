const API_KEY = "91ca049913c76c402084e715a5fe8f8c";
const COORDS = "coords";

//로컬저장소에 위도 경도 저장(obj를 string으로 바꿈)
function saveCoords(coordsOBJ) {
  localStorage.setItem(COORDS, JSON.stringify(coordsOBJ));
}
//로컬저장소에 위도 경도 저장
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsOBJ = {
    //객체에 변수의 이름과 객체의 key이름을 같게 저장할 경우
    // latitude: latitude,
    // longitude: longitude,
    //이렇게 해도 됨
    latitude,
    longitude,
  };
  saveCoords(coordsOBJ);
}

function handleGeoError() {
  console.log("Cnat access geo location");
}

//위치정보 읽기 navigator API geolocation obj
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); //navigator API, window, document...
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    //위치정보 동의 하기 전
    askForCoords(); //좌표요청함수
  } else {
    //getWeather  //날씨요청함수
  }
}

function init() {
  loadCoords();
}

init();
