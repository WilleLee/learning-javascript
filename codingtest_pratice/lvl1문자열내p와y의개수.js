let str1 = "pPoooyY";
let str2 = "pPy";

function solution1(s){
  let answer = true;
  let p개수 = 0;
  let y개수 = 0;

  s = s.toLowerCase();

  for(let i = 0; i < s.length; i++){
    if(s.charAt(i)==="p"){
      p개수++;
    }else if(s.charAt(i)==="y"){
      y개수++;
    }
  }

  if(p개수!==y개수){
    answer = false;
  }

  return answer;
}

//console.log(solution1(str1)); //true
//console.log(solution1(str2)); //false

function solution2(s){
  let p개수 = 0;
  let y개수 = 0;

  s = s.toLowerCase();

  for(let i = 0; i < s.length; i++){
    if(s.charAt(i)==="p"){
      p개수++;
    }else if(s.charAt(i)==="y"){
      y개수++;
    }
  }

  return p개수 === y개수; // 따로 answer라는 변수 저장할 필요 없이 true or false return 가능
}

//console.log(solution2(str1));
//console.log(solution2(str2));

//다른 사람꼬

function solution3(s){
  return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
  // "oooyy" and "ppooo"
}

console.log(solution3(str1));
console.log(solution3(str2));