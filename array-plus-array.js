
function arrayPlusArray(arr1, arr2) {
  // const newArray = [...arr1, ...arr2];
  // return newArray.reduce((acc , cur) => acc + cur , 0);

  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // expected output: 21