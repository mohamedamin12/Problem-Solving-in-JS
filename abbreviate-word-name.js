function abbrevName(name){

  let names = name.split(' '); 
  let initials = names[0].charAt(0).toUpperCase() + '.';
  let lastInitial = names[1].charAt(0).toUpperCase();
  return initials + lastInitial;

}

console.log(abbrevName("Peter Parker")); // Output: P.P