function digitize(n) {
  //code here
  return n
    .toString()
    .split("")
    .map((num) => Number(num)).reverse();
}

console.log(digitize(parseInt(35231)));
