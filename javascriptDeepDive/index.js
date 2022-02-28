console.log(score); // undefined
// 변수 선언(선언과 초기화)은 런타임 이전에 일어남 -> var score = undefined
// 변수 선언이 코드의 선두로 끌어올려진 것처럼 동작하는 자바스크립트의 특징을 변수 호이스팅(variable hoisting)이라고 한다.
// 값의 할당은 런타임에 일어남 -> score = 10

var score = 10;

console.log(score); // 10

console.log(score1); // undefined

score1 = 80; // 런타임에 일어남 ... 2 , thus 값의 할당이 정상적으로 이루어짐
var score1; // 변수선언 먼저 일어남 ... 1

console.log(score1); // 80
