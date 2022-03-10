import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseOver: function(){
    title.style.color = colors[0];
  },
  handleMouseLeave: function(){
    title.style.color = colors[1];
  },
  handleMouseResize: function(){
    title.style.color = colors[2];
  },
  handleContextMenu: function(){
    title.style.color = colors[3];
  }
};
title.addEventListener("mouseover", superEventHandler.handleMouseOver);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleMouseResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);