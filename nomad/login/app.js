const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
//loginForm이 이미 css selector이므로 그 내에서 검색 가능
const link = document.querySelector("a");
const h1 = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
//관습적으로 string value를 할당하는 변수는 대문자로 저장
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault();
  //해당 이벤트의 default behaviour를 제거
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintH1(username);
  //localStorage (.setItem(...), .getItem(...)) 통해서 기억 가능
  //일종의 작은 DB
  localStorage.setItem(USERNAME_KEY, username);
};
//loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit(방금 일어난 event를 parameter로 보내서 실행!)

const paintH1 = (username) => {
  h1.innerText = `Hello, ${username}!`;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintH1(savedUsername);
}