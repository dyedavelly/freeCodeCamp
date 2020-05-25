function palindrome(str) {
  var cleanArr = function(str)
  {
    return str
            .replace(/\W/g, '') 
            .replace(/_/g, '')
            .toLowerCase()
            .split('');
  }
 if(cleanArr(str).join('') === cleanArr(str).reverse().join(''))
    return true;
return false;
}

