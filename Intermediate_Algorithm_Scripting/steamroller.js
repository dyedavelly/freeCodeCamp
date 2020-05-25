function steamrollArray(arr) {
  var finalArr = [];
  arr.forEach(item => {
    if(Array.isArray(item))
      {
        finalArr.push(...steamrollArray(item));
      }
      else
      {
        finalArr.push(item);
      }
  });
  
  return finalArr;
}
