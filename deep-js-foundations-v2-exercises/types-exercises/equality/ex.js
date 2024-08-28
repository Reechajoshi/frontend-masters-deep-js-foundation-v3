// TODO: write `findAll(..)`
function findAll(searchobj, array) {
  let resultarr = [];
  for(var i=0; i < array.length; i++) {
    if(array[i] == undefined) {
      if(searchobj == array[i]) {
        resultarr.push(array[i])
      }
    } else {
      if(Object.is(searchobj)) {
        if(array[i] && Object.is(array[i])) {
          if(array[i].toString() == searchobj.toString()) {
            resultarr.push(array[i])
          }
        }
      }
      if(typeof searchobj == 'string') {
        if(typeof array[i] == 'string' || typeof array[i] == 'number') {
          if((searchobj+"").trim() == (array[i]+"").trim()) {
            resultarr.push(array[i])
          }  
        }
        
      }
      if(typeof searchobj == 'number') {
        if(searchobj == -Infinity || searchobj == Infinity || Number.isNaN(searchobj)) {
          if(array[i] == -Infinity || array[i] == Infinity || Number.isNaN(array[i])) {
            continue;
          }
        } else {
          if(typeof array[i] == 'number' || typeof array == 'string') {
            if (searchobj == array[i]) {
              resultarr.push(array[i])
            }
          }
        }
      }
      
      if(typeof searchobj == 'boolean') {
        if(typeof array[i] == 'boolean') {
          if(searchobj == array[i]) {
            resultarr.push(array[i])
          }
        }
      }
      
    }
    // if(searchobj == undefined) {
    //   if(array[i] == searchobj) {
    //     resultarr.push(array[i])
    //   }
    // }
    
    
  }
  
  return resultarr;
  
}


// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];


console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
