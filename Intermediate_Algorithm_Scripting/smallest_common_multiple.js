function smallestCommons(arr) {
  var a = arr[0] > arr[1] ? arr[0] : arr[1];
  var b = arr[0] < arr[1] ? arr[0] : arr[1];
  var lcm = a;
  var i = b;
  while(i <= a)
  {
    if(lcm % i != 0)
    {
      lcm += a;
      i = b;
    }
    else
    {
     i++;
    }
  }
  return lcm;
}
