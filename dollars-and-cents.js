function formatMoney(amount){
  // your formatting code here
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(145)); // Output: $12,345.67