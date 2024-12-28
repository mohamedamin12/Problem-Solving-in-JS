function doubleChar(str) {
  // Your code here
  return str.split("").map((ele) => ele.repeat(2)).join('')
}

console.log(doubleChar("String"));
