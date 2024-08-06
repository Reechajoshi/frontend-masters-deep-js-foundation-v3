// TODO: define polyfill for `Object.is(..)`
if(!Object.is || true) {
    // negative zero
  Object.is = function objectIs(var1, var2) {
    var isVar1NegativeZero = isNegativeZero(var1);
    var isVar2NegativeZero = isNegativeZero(var2);
    
    if(isVar1NegativeZero || isVar2NegativeZero) {
      return isVar1NegativeZero === isVar2NegativeZero
    } else if(isNotANumber(var1) || isNotANumber(var2)) {
      return isNotANumber(var1) === isNotANumber(var2)
    } else {
      return var1 === var2
    }
    
    
    
    function isNegativeZero(x) {
      return x === 0 && (1/x) == -Infinity
    }  
    
    function isNotANumber(x) {
      return x !== x
    }
  }
  
  
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log('both not a number', Object.is(NaN,NaN) === true);
console.log("negative zero", Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log('negative zero and 0', Object.is(-0,0) === false);
console.log('o and negative 0', Object.is(0,-0) === false);
console.log('zero and nan', Object.is(0,NaN) === false);
console.log('one not a number', Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
