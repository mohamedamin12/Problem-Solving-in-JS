function findAverage(array) {
  // let sum = array.reduce((acc , cur)=> acc + cur, 0);
  // if (sum !== 0){
  //   return sum / array.length;
  // } else  return 0;
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

console.log(findAverage([1, 2, 3, 4, 5]));