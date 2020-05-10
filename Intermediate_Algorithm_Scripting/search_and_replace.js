function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if(str[index] === str[index].toUpperCase())
  {
    after = after[0].toUpperCase() + after.substring(1);
  }
  return str.replace(before, after);
}
