function scuberGreetingForFeet(number){
  // Write your code here!
let answer
if (number < 400) {
  answer = "This one is on me!";
}

else if (number >= 400 && number < 2000)
{
  answer = "That will be twenty bucks.";
}

else if (number >= 2000 && number < 2500)
{
  answer = "I will gladly take your thirty bucks.";
}

else if (number >= 2500)
{
  answer = "No can do.";
}

return answer;

}

function ternaryCheckCity(city){
  // Write your code here!

  return city === "NYC" ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let statement;
  switch (tip) {
    case "generous": 
    statement = "Thank you so much."
      break;
    case "not as generous":
      statement = "Thank you."
      break;
    default:
      console.log("Bye.")
      statement = "Bye."
  }
  return statement;
}