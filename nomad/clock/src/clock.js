const clock = document.querySelector("h2#clock");

const getClock = function(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // call the start time
setInterval(getClock, 1000); // 특정 시간마다 함수 실행

//setTimeout(sayHello, 5000); // 특정 시간 이후에 함수 실행