// */Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.

// Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array
// ([1,2,2,3,3,3].uniq() => [1,2,3])

// Array#twoSum - returns an array of position pairs where the elements sum to zero

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array
// /*

function unique(array){
    let arr = []
    array.forEach(element => {
        if(!arr.includes(element)){
            arr.push(element);
        }
    });
    return arr;
}

function twoSum(array){
    let arr =[]
    for(let i=0; i< array.length; i++){
        for(let j=0; j< array.length; j++){
            if( i<j && (array[i]+array[j]===0)){
                arr.push([i,j]);
            }
        }
    }
    return arr
}

function transpose(array){
    let arr=[];
    for(let i=0; i<array.length; i++){
         let subArr = [];
        for(let j=0; j< array[0].length; j++){
            subArr.push(array[j][i])
        }
    arr.push(subArr)
    }
    return arr
}

