var retValue=function(arr, n){
    const result=arr.sort((a,b) => {
        return b - a  //내림차순
    });
    return result[n-1]; //문자열 1부터 시작
}

document.writeln(retValue(["4", "5", "8", "11"], 3));  
document.writeln(retValue(["21", "2", "42", "3", "7", "24"], 4));
document.writeln(retValue(["0","0"], 2));