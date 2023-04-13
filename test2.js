var retValue = function(nums) {
    const result=nums.sort((a,b)=> { //nums를 sort로 숫자크기순서 정렬
        if(String(a).length !=String(b).length){ //자릿수가 같지 않다면
            const value1=parseInt(a+''+b); //ab스트링값과 
            const value2=parseInt(b+''+a); //ba스트링값을 비교하여 

            if(value1 > value2) return -1;
            if(value1 < value2) return 1;
            //더 큰값을 가지는 요소를 낮은 인덱스에 배치
        } else{ //자릿수가 같다면 더 큰수가 낮은 인덱스로
            if(a>b) return -1;
            if(a<b) return 1;
        }  
    }).join(""); //요소 이어붙이기

    document.writeln(result);
};

retValue([3,20]);
retValue([5,8,54,40,7]);