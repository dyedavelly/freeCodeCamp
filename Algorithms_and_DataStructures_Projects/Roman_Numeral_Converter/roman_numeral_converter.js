function convertToRoman(num) {
   var numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000]; 
    var symbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]; 
    var romanNumeral = "";
    var i=12;     
    while(num > 0)
    {
      var div = num / num[i];
      num = num % num[i];
      while( div >= 1)
      {
        romanNumeral+=symbols[i];
      }
      i--;
    }
    return romanNumeral; 
  
 }
