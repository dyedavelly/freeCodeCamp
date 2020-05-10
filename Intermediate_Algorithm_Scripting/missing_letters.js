function fearNotLetter(str) {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var start = letters.indexOf(str[0]);
  var len = str.length - 1;
  var end = letters.indexOf(str[len]);
  for(var i=0; i < str.length; i++)
  {
      if(str[i] != letters[start])
      {
        return letters[start];
      }
      start++;
  }
  return undefined;
}
