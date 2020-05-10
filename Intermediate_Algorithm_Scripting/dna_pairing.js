function pairElement(str) {
  var result = [];
  var pairs = function(char)
  {
    switch(char)
    {
      case 'A':
        result.push(["A", "T"]);
        break;
      case 'T':
        result.push(["T", "A"]);
        break;
      case 'C':
        result.push(["C", "G"]);
        break;
      case 'G':
        result.push(["G", "C"]);
        break;
    }
  }
  for(var i = 0; i < str.length; i++)
  {
    pairs(str[i]);
  }
  return result;
}
