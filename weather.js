const weather = document.querySelector(".js-weather");

const API_KEY = "91ca049913c76c402084e715a5fe8f8c";
const COORDS = "coords";

// 잘 동작하는 지 개발자 모드 Network에서 확인
function getWeather(lat, lng) {
  //데이터 가져오는 법 fetch() 사용
  //then -> (이전 메소드가 완료된 다음 실행)데이터가 완전히 넘왔을 때 다음을 실행하라
  //그니까 js에서 뭔가가 끝나길 기다리는 방법이 then
  //JSON등 데이터 처리가 되지 않았는데 다음 걸 처리하면 안 됨.
  //json을 가져오는 이유는 network데이터말고, body안에 있는 데이터를 보기 위해
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ) //여기까지만 하면 pending(대기상태, 가져온 데이터 처리중)상태가 계속됨
    .then(function (response) {
      //console.log(response)
      return response.json();
    })
    //응답이 끝나길 기다린 뒤 json데이터준비
    .then(function (json) {
      //console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

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
  getWeather(latitude, longitude);
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
    //위치정보를 가져오고 나서 실행
    //getWeather  //날씨요청함수
    const parsedCoordes = JSON.parse(loadedCoords);
    //console.log(parsedCoordes); //확인
    getWeather(parsedCoordes.latitude, parsedCoordes.longitude);
  }
}

function init() {
  loadCoords();
}

init();
