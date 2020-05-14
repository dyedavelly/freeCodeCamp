function addTogether(a, b) {
    if(!b)
    {
      if(!Number.isInteger(a))
        {
          return undefined;
        }
      console.log(1);
      return function(x){
        if(!Number.isInteger(x))
        {
          return undefined;
        }
        return a + x;
      }
    } else {
      if(typeof a !== "number" || typeof b !== "number")
      {
        return undefined;
      }
      return a+b;
    } 
}
