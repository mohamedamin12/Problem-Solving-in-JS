function boolToWord( bool ){
  // if( bool ){
  //   return "Yes";
  // }else {
  //   return "No";
  // }
  return bool? "Yes" : "No";
}

console.log(boolToWord(true));