function destroyer(arr) {
 //convert all arguments into an array 
 var args = Array.prototype.slice.call(arguments);
  var args2 = args.slice(1);
  return arr.filter(item => args2.indexOf(item) < 0);
}
