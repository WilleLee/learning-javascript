let n = 10;

function solution1(n){
  let x = 0;
  for(let i = 1; ; i++){
    x = i;
    if(n%i===1) break;
  }
  return x;
};

console.log(solution1(n));