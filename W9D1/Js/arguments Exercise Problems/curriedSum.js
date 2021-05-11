




function curriedSum1(numArgs) { //[ 1, 2, 3, 4, 5]
    const numbers = [];
    function _curriedSum(num1) {
        numbers.push(num1);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach((n) => { sum += n } );
            return sum; 
        } 
        else {
            return _curriedSum;
        }
    }
    return _curriedSum;
  }

//   console.log(curriedSum1(4, 20, 6)); // == 30
  
//   // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30

const sum = curriedSum1(4);
console.log(sum(5)(30)(20)(1)); // => 56