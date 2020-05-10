function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if(vowels.includes(str[0]))
       return str+"way";
  var part = "";
  var temp = "";
  for(var i = 0; i < str.length; i++)
  {
      if(!vowels.includes(str[i]))
      {
        temp = str.substring(i+1);
        part += str[i];
      }
      else
      {
        return temp+part+"ay";
      }
  }
  return str+"ay";  
}
