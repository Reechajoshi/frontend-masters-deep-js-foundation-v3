// TODO: write the validation functions

// narrow down to the explicit types we are expecting..

function isValidName(name) {
  /** if(Number(name) === 0) return false;
  if(name && name.length < 3) return false;
	return typeof(name) === 'string'
  **/
  if(
    typeof name === "string" &&
     name.trim().length >=3 
    ) 
    return true;
  return false;
}

function hoursAttended(attend, length) {
  /** let num1 = Number(attend)
  let num2 = Number(length)
  if(typeof(attend) !== "number" && typeof(attend) !== "string") {console.log("1",attend,length); return false;}
  if(typeof(length) !== "number" && typeof(length) !== "string") 
  
  if(num1 % 10 < 0 || num2 % 10 < 0) {console.log("2",attend,length); return false;}
  if(attend.length === 0 || length.length === 0) return false;
  if(num1 > 0 && num2 > 0) {
    if(Number(attend) <= Number(length)) {
      console.log("4",attend,length); return true;
    } else {
      return false;
    }   
  }
  
  // return false;
  **/
  
  // either parameter may only be a string or number
  if (typeof attend === 'string' && attend.trim() !== "") 
    attend = Number(attend)
  if (typeof length === 'string' && length.trim() !== "") 
    length = Number(length)
  if (typeof attend === 'number' && typeof length === 'number') {
    if(
      attend >= 0 && length >= 0 &&
      Number.isInteger(attend) &&
      Number.isInteger(length) &&
      attend <= length
      )
      return true;
  }
  return false;
}




// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);


console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);

console.log(null == undefined)
console.log(42 == [42])

