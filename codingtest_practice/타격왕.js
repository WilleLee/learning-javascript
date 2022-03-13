//오늘 푼 문제 중 가장 오래 걸린 문제...

//타수와 안타수를 각각 한 번씩, 총 두 번 값을 입력받아 할푼리의 결과를 console에 띄운다.

//단 타자가 현재까지 16타수 6안타를 기록했으며, 추후 경기에서 더한
//타수와 안타수를 입력받는 것임

//값이 0인 경우는 생략


const cal할푼리 = (타수, 안타) => {
  let rawProb = 안타 / 타수; // 0.625
  let raw할푼리 = [0, 0, 0];
  let new할푼리 = [];
  
  raw할푼리[0] = Math.floor(rawProb * 10); // 6
  if(raw할푼리[0] === 0){
      raw할푼리[1] = Math.floor(rawProb * 100);
      if(raw할푼리[1] === 0){
          raw할푼리[2] = Math.floor(rawProb * 1000);
      }else if(raw할푼리[1] > 0){
          raw할푼리[2] = Math.floor(rawProb * 1000) - (raw할푼리[1] * 10);
      }
      
      
  }else if(raw할푼리[0] > 0){      //62                60
      raw할푼리[1] = Math.floor(rawProb * 100) - (raw할푼리[0] * 10);
      if(raw할푼리[1] === 0){        // 
          raw할푼리[2] = Math.floor(rawProb * 1000) - (raw할푼리[0] * 100);
      }else if(raw할푼리[1] > 0){     //625               600                   20
          raw할푼리[2] = Math.floor(rawProb * 1000) - (raw할푼리[0] * 100) - (raw할푼리[1] * 10);
      }
  }
  
  raw할푼리.map((elem,i) => {
      if(elem > 0){
          if(i === 0){
              new할푼리.push(elem + '할');
          }else if(i === 1){
              new할푼리.push(elem + '푼');
          }else if(i === 2){
              new할푼리.push(elem + '리');
          }
      }
  });
  
  return new할푼리;
  
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = 0;
let currentScore = [16, 6];
rl.on('line', (line) => {
  
  if(count === 0){
      currentScore[0] += parseInt(line);
  }else if(count === 1){
      currentScore[1] += parseInt(line);
  }

  count++;
  if(count === 2){
      rl.close();
  }
  
}).on('close', () => {
  let result = cal할푼리(currentScore[0], currentScore[1]);
  for(let i = 0; i < result.length; i++){
      console.log(result[i]);
  }
  process.exit();
});