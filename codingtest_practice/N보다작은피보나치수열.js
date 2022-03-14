// input 미만인 수까지의 피보나찌 수열을 출력한다.
// input을 어떤 data type으로 입력받는지 계속 생각하자.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = [0];
rl.on('line', (line) => {
    line = parseInt(line);
    
    for(; count[count.length - 1] < line ;){
        if(count.length < 2){
            count.push(1);
        }else{
            count.push(count[count.length - 1] + count[count.length - 2]);
        }
    }
    count.pop();
    
    rl.close();
    

}).on('close', () => {
    console.log(count);
    process.exit();
});