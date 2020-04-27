function sortNumberArray(arr) {
  let newArr = arr.sort(compare);
   return newArr;
}

function compare(a, b){
  return a - b;
}