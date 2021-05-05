Array.prototype.myEach = function myEach(callback){
    for(let i=0; i < this.length; i++){
        callback(this[i]);
        
    }
}


Array.prototype.myMap = function myMap(callback){
    let arr = [];
    this.myEach( function(element){ 
        arr.push(callback(element))
    })
    console.log(arr)
    return arr
}

Array.prototype.myReduce = function myReduce(callback,initial_value) {
    debug
    if (initial_value === undefined){
        initial_value = this[0]
        this.slice(1,this.length).myEach( function(element){
            initial_value = callback(initial_value, element);
        })
    } else {
        this.myEach( function(element){
           initial_value = callback(initial_value, element);
        })
        
    }
    return initial_value
}