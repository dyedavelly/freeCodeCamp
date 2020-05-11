function sumFibs(num) {
  var sum = 0;
  var arr = fibonacci(num);
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i]%2 !== 0 && arr[i] <= num)
      sum = sum+arr[i];
  }
  return sum;
}
function fibonacci(num)
{
  var prevNumber = 0;
  var currNumber = 1;
  var temp = 0;
  var arr = [];
  var i = 1;
  while (currNumber <= num) {
      arr.push(currNumber);
      temp = prevNumber;
      prevNumber = currNumber;
      currNumber = currNumber + temp; 
    }
    return arr;
}
