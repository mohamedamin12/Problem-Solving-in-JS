function squareSum(numbers){
    return numbers.reduce((acc , cur)=> acc + cur **2 , 0)
//let result = 0 ;
//for (let i = 0 ; i < numbers.length; i++ ){
//    result += numbers[i] * numbers[i];
}
return result;
}

console.log(squareSum([1 , 2 , 2]));