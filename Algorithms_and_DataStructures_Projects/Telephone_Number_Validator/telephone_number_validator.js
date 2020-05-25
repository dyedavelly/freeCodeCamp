//(?:()|()) use this pattern for two conditions
function telephoneCheck(str) {
var regex = /^1?\s?(?:([0-9]{3})|(\([0-9]{3}\)))[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/;
   
  if(regex.test(str))
     return true;
  return false;
 
}
