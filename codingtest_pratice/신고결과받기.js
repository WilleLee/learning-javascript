// 1차 시도... 샘플 부분 성공, 부분 실패, 부분 런타임 초과
function solution1(id_list, report, k) {
    
    let arr = [];
    report.forEach((a) => {
        if(arr.includes(a)) return;
        arr.push(a);
    });
    
    //console.log(arr); 동일 신고내용 삭제
    
    //영구정지 당하는 애들을 찾아라?
    let badkids = [];
    id_list.forEach((a) => {
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j].endsWith(a)) count++;
        }
        if(count>=k) badkids.push(a);
    });
    //console.log(badkids); 잡았다 요놈
    
    // 영정회원 신고케이스만 남기기
    let arr2 = [];
    badkids.forEach((a) => {
        for(let j = 0; j < arr.length; j++){
            if(arr[j].endsWith(a)) arr2.push(arr[j]);
        }
    });
    //console.log(arr2);
    
    //회원들이 각각
    let result = [];
    id_list.forEach((a) => {
        let count = 0;
        for(let j = 0; j < arr2.length; j++){
            if(arr2[j].startsWith(a)) count++;
        }
        result.push(count);
    });
    //console.log(result);
    
    return result;
}