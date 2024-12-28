function remove (string) {
  //coding and coding....
  return string.replace(/!$/ , "");
}

console.log(remove('!Hi!!')); // ["Hello", "World"]