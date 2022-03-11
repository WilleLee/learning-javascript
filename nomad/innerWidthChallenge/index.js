const body = document.querySelector("body");

function handleResizeBackground(){
  const innerWidth = window.innerWidth;
  //console.log(window.innerWidth);
  //500 750 1000
  if(innerWidth < 680){
    body.classList.remove("middle");
    body.classList.remove("large");
  }else if(innerWidth >= 680 && innerWidth < 1000){
    body.classList.remove("large");
    body.classList.add("middle");
  }else{
    body.classList.remove("middle");
    body.classList.add("large");
  }
}

window.addEventListener("resize", handleResizeBackground);