const age = 13;
function calKrAge(age){
  return age + 2; // let us use the result of the function in codes
}
const krAge = calKrAge(age); // returned value of the function

console.log(krAge);

const cal = {
  plus: function(a, b){
    console.log("hello");
    return a + b; // once you write return, the function stops there.
    console.log("after return"); // never runs!
  }
};

const plusResult = cal.plus(5, 2);