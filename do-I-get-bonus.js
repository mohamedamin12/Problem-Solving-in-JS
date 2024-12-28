function bonusTime(salary, bonus) {
  // your code here
  if (bonus){
    return `£${salary * 10}`
  }else {
    return `£${salary}`
  }
  }

  console.log(bonusTime(20, true));

