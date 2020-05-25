//charCodeAt(0) converts character to ascii
//fromCharCode() method converts ascii values into characters
function rot13(str) {
  var chars = str.split('');
  console.log(chars);
  var newArr = [];
  var temp = "";
  chars.forEach(char => {
    var x = char.charCodeAt(0); 
        if (x >= 65 && x <= 77) {
          newArr.push(String.fromCharCode(x + 13));
        }
        else if (x >= 78 && x <= 90) {
          newArr.push(String.fromCharCode(x - 13));
        }
        else 
          newArr.push(String.fromCharCode(x));
  });
    
    
  return newArr.join('');
}
