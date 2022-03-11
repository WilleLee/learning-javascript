const h1 = document.querySelector("div.hello h1");

function handleTitleClick(){
  // const currentColor = h1.style.color;
  // let newColor;
  // if(currentColor === "blue"){
  //   newColor = "tomato";
  // }else{
  //   newColor = "blue";
  // }
  // h1.style.color = newColor;

  // const activeClass = "active";
  // if(h1.classList.contains(activeClass)){
  //   h1.classList.remove(activeClass);
  // }else{
  //   h1.classList.add(activeClass);
  // }

  h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleClick);