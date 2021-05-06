Array.prototype.range=function range(start,end){
   return this.slice(start,end+1)
}

function sumRec(arr){
    if(arr.length===1){
        return arr
    }
   return arr[0]+sumRec(arr.slice[1,arr.length-1])
}

