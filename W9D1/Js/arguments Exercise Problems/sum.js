function sum1(arg){
    let totalSum = 0;
    for(let i = 0; i<arg.length; i++){
        totalSum+=arg[i];
    }
    return totalSum;
}


function sum2(...arg){
    let totalSum = 0;
    for(let i = 0; i<arg.length; i++){
        totalSum+=arg[i];
    }
    return totalSum;
}   



console.log(sum2(1, 2, 3, 4))
console.log(sum2(1, 2, 3, 4, 5))