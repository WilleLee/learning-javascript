let s = 'one4seveneight';

function solution1(s){
  let answer = 0;

  const chars = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for(let x=0; x<s.length; x++){
    chars.forEach((a, i)=>{
      if(s.startsWith(a, x)){
        s = s.replace(a, nums[i]) // replace 단독으로는 기존 문자열 자체를 변형시키지 않는다.
      }
    })
  };

  answer += Number(s);

  return answer;
}

console.log(solution1(s));

function solution2(s){
  let answer = 0;

  const chars = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for(let x=0; x<s.length; x++){
    chars.forEach((a, i)=>{
      if(s.startsWith(a, x)){
        s = s.replace(a, i) // chars 각각의 index가 nums 값과 일치하므로 요로케!
      }
    })
  }

  answer += Number(s);

  return answer;
}

console.log(solution2(s));

// 다른 사람꼬
function solution3(s){
  let answer = s;

  const chars = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for(let i=0; i<chars.length; i++){
    let arr = answer.split(chars[i]);
    answer = arr.join(i);
    console.log(answer);
  }

  return Number(answer);
}

//'one4seveneight'

//0
//arr='one4seveneight'
//arr.join(0) = 'one4seveneight'

//1
//arr = [ "", "4seveneight" ]
//arr.join(1) = "14seveneight" = answer
// ""(공백)과 "4seveneight"을 "1"로 연결

//...

//7
//arr = [ "14", "eight" ]
//arr.join(7) = "147eight" = answer

//8
//arr = [ "147", "" ]
//arr.join(8) = "1478" = answer

console.log(solution3(s));