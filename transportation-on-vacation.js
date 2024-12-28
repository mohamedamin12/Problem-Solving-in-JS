function rentalCarCost(d) {
  // Your solution here
  let total = 40 * d;
  if (d >= 7) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }else {
    total;
  }
  return total;
}

console.log(rentalCarCost(7)); 
