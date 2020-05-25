function convertToRoman(num) {
   var numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000]; 
    var symbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]; 
    var romanNumeral = "";
    var i=12;     
    while(num > 0)
    {
      var div = num / numbers[i];
      num = num % numbers[i];
      while( div >= 1)
      {
        romanNumeral+=symbols[i];
        div--;
      }
      i--;
    }
    return romanNumeral; 
  
 }
