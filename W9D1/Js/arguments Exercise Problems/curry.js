Function.prototype.curry = function(numArgs) {
    const argsArray = [];
    const that = this;
    return function _curry(arg) {
        argsArray.push(arg);
        if (argsArray.length === numArgs) {
            // return that.apply(null, argsArray)
            return that.call(null, ...argsArray)
        } 
        else {
            return _curry;
        }
    }
    // return _curry;
  }

//   const sum = [1, 2, 3, 4, 5];
//   console.log(sum.curry(5)); // => 56

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  // first way => 
//   sumThree(4, 20, 6); // == 30
  

// second way => Functional programming
  // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
  // or more briefly:
  console.log(sumThree.curry(3)(4)(20)(6)); // == 30