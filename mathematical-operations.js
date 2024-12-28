function basicOp(operation, value1, value2){
  //Code
  // if (operation === "+"){
  //   return value1 + value2;
  // }else if (operation === "-"){
  //   return value1 - value2;
  // }else if (operation === "*"){
  //   return value1 * value2;
  // }else if (operation === "/"){
  //   return value1 / value2;
  // }
  switch (operation) {
    case "+" : return value1 + value2
    case "-" : return value1 - value2
    case "*" : return value1 * value2
    case "/" : return value1 / value2
    default : return "invalid operation"
  }
}

console.log(basicOp(" ", 4, 2));