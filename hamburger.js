var hamburger = {
  veg: ["Lettuce", "Tomato", "Onion"],
  meat: "shark",
  mayo: true,
  mustard: true,
  ketchup: true,
  price: 50,
  ounces: 8,
}

//Ask the user for how many they want to buy
var amount = prompt("How much are you ordering?");
//Tell them how much it will be and how much ounces they will get
var totalOunces = amount * hamburger.ounces;
var totalDollar = amount * hamburger.price;
window.alert("Total: $" + totalDollar + " Ounces: " + totalOunces + " oz.");