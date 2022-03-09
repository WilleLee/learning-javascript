// Conditionals

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
  console.log("Please write a real positive number.");
}else if(age >= 18 && age <= 50){
  console.log("You may drink"); 
}else if(age < 18){
  console.log("too young");
}else{
  console.log("too old");
}