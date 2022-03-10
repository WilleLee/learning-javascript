//document.title = "hello from JS";

// the browser shows the changed title.
// JS is already connected to the HTML(document)!!

const h1 = document.querySelector(".hello h1");
//console.dir(title);
// object type의 h1#title 확인 가능

//querySelector = you may use a CSS selector!
//querySelector -> 첫 번째의 한 개만 호출

console.log(h1);

//const titles = document.querySelectorAll(".hello h1");
//console.log(titles);

//title.innerText = "see you";
//title.style.color = "tomato";

function titleClicked(){
  h1.style.color = "tomato";
}
h1.addEventListener("click", titleClicked);
//addEventListener = literally listens events
//JS에게 함수의 이름만 넘겨주고, 실행시점에 실행하도록 함
//title.onclick = titleClicked;

function mouseEntered(){
  h1.innerText = "mouse is here!";
}
h1.addEventListener("mouseenter", mouseEntered);
//title.onmouseenter = mouseEntered;

function mouseLeft(){
  h1.innerText = "mouse is gone!";
}
h1.addEventListener("mouseleave", mouseLeft);
//title.onmouseleave = mouseLeft;

// but Nico prefers to use addEventListener,
// because in that case we could use .removeEventListener to remove the previous eventListener later.

function handleWindowResize(){
  document.body.style.backgroundColor = "lightBlue";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy(){
  alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

console.dir(window);

function handleContextMenu(){
  h1.style.color = "red";
}
window.addEventListener("contextmenu", handleContextMenu);