function uniteUnique(arr) {
  for(var i = 1; i < arguments.length; i++)
  {
    for(var j = 0; j < arguments[i].length; j++)
    {
      if(!arguments[0].includes(arguments[i][j]))
      {
        arguments[0].push(arguments[i][j]);
      }
    }
  }
  return arguments[0];
}
