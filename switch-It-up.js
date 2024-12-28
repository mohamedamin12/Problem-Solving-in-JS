function switchItUp(number){
  //Write your own Code!
  switch(number){
    case 0: return "Zero";
    case 1: return "One";
    case 2: return "Two";
    case 3: return "Three";
    case 4: return "Four";
    case 5: return "Five";
    case 6: return "Six";
    case 7: return "Seven";
    case 8: return "Eight";
    case 9: return "Nine";
    default: return "Error: Invalid Number";
  }
  }

  console.log(switchItUp(7)); // Should print: "Seven"
  console.log(switchItUp(15)); // Should print: "Error: Invalid Number"
  console.log(switchItUp(-1)); // Should print: "Error: Invalid Number"
  console.log(switchItUp(10)); // Should print: "Error: Invalid Number"
  console.log(switchItUp("ten")); // Should print: "Error: Invalid Number"
  console.log(switchItUp(12.3)); // Should print: "Error: Invalid Number"
  console.log(switchItUp(true)); // Should print: "Error: Invalid Number"
  console.log(switchItUp(false)); // Should print: "Error: Invalid Number"
  