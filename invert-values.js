function invert(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * -1);
//   }
//   return newArray;


  return array.map((num) => num * -1);
}

console.log(invert([1, -2, 3, -4, 5]));