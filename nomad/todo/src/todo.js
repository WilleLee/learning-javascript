const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "toDos";

const saveToDos = function(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteToDo = function(event){
  const li = event.target.parentElement;
  toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  saveToDos();
  li.remove();

}

const paintToDo = function(newToDoObj){
  const newLi = document.createElement("li");
  newLi.id = newToDoObj.id;
  const newSpan = document.createElement("span");
  newSpan.innerText = newToDoObj.text;
  newLi.appendChild(newSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "❌";
  newLi.appendChild(deleteBtn);

  toDoList.appendChild(newLi);

  deleteBtn.addEventListener("click", deleteToDo);
}

const emptyInput = function(){
  toDoInput.value = "";
}

const handleToDoSubmit = function(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  emptyInput();

  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
const sayHello = function(){
  console.log("hello")
}
if(savedToDos !== null){
  savedToDos.forEach(element => {
    paintToDo(element);
  });
  toDos = savedToDos;
}