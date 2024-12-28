function positiveSum(arr) {
  // let sum = 0;
  // for(i =0 ; i < arr.length ; i++){
  //   if(arr[i] > 0){
  //     sum += arr[i];
  //   }
  // }
  // return sum;
  return arr.filter((num) => num > 0).reduce((acc, cur) => acc + cur);
}

console.log(positiveSum([1, 2, 3, -4, -5]));
