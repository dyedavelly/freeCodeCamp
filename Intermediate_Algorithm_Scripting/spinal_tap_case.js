function spinalCase(str) {
//read about positive lookaheads in regex to understand the regex I used
  return str
         .split(/(?=[A-Z])|\s+|_+/g)
         .join("-")
         .toLowerCase();
  
}
