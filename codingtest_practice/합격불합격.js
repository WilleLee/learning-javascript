// object type으로 각 과목의 성적을 받음
//모든 과목에서 40점 이상, 평균으로는 60점 이상을 받으면 "pass"
//하나라도 40점 미만이거나 평균이 60점 미만이면 "fail"

var scores = {
  "kor": 55,
  "mat": 75,
  "eng": 50
}

let arr = Object.values(scores);
// Object.values(obj) ... 오브젝트 내 모든 값들을 배열 형태로 반환함!
let sum = 0;
let average;
let whether40 = true;
for(let i = 0; i < arr.length; i++){
  sum += arr[i];
  if(arr[i] < 40){
      whether40 = false;
  }
}
average = sum / arr.length;

function getResult(average, whether40){
  if(average >= 60 && whether40){
      return "pass";
  }else{
      return "fail";
  }
}

document.write(getResult(average, whether40));