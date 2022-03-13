//한 명 빼고 모두 완주
//participant = [참여자들]
//completion = [완주자들]
//완주 못한 사람 이름 return : string
//동명이인 있을 수 있음
function solution(participant, completion) {
    
  for(let i in completion){
      if(participant.includes(completion[i])){
          let index = participant.indexOf(completion[i]);
          participant = [...participant.slice(0, index), ...participant.slice(index+1, participant.length)];
      } else return;
  }
  return participant[0];
}
//런타임 오류로 효율성 테스트 실패...

function solution2(participant, completion) {
  participant.sort();
  completion.sort();
  //sort로 정렬 -> for문을 이중으로 사용하지 않아도 됨
  let loser = '';

  for(let i in participant){
    if(participant[i]!==completion[i]){
      loser = participant[i];
      break; // break를 걸지 않으면 이후 순서가 바뀌어 있는 선수들도 값으로 가져오므로 result가 바뀜.
    }
  }

  return loser;
}

//map을 사용한 풀이
function solution3(participant, completion) {
  const map = new Map();

  for(let i = 0; i < participant.length; i++){
    let a = participant[i],
        b = participant[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
}