//parseInt function converts strings to numbers, and it takes a second argument specifying the base in which the string representation is
//fromCharCode() method converts Unicode values into characters

function binaryAgent(str) {
  return str.split(/\s/).map(function (val){
    return String.fromCharCode(parseInt(val, 2));
  }).join("");
}
