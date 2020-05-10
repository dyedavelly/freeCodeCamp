function convertHTML(str) {
  var html = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"' : '&quot;',
    "'": '&apos;'
  }  
  var keys = Object.keys(html);
  for(var i = 0; i < str.length; i++)
  {
    if(keys.includes(str[i]))
    {
      str = str.replace(str[i],html[str[i]]);
    }
  }
  return str;
}
