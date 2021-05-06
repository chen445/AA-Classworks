function bubbleSort(array){
    let sorted=false;
    while(sorted===false){
        sorted=true;
        for(let i=0; i<array.length-1; i++){
            if(array[i]>array[i+1]){
                let tem=array[i];
                array[i]=array[i+1];
                array[i+1]=tem;
                sorted = false
            }
        }

    }
    return array
}


function subStrings(string){
    let arr=[];
    for(let i=0; i<string.length; i++){
        arr.push(string[i])
        for(let j=0; j<string.length;j++){
            if(i<j){
                arr.push(string.slice(i,j+1));
            }
        }
    }
    return arr
}

