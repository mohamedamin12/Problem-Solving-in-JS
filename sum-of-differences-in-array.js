function sumOfDifferences(arr) {
  // if (arr.length < 2) return 0; // Return 0 if the array has less than 2 elements

  // // Sort array in descending order
  // arr.sort((a, b) => b - a);

  // let sum = 0;
  // for (let i = 0; i < arr.length - 1; i++) {
  //   sum += arr[i] - arr[i + 1];
  // }
  
  // return sum;

  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

}

console.log(sumOfDifferences([2, 1, 10]));