<html>
  <head>
  </head>
<body>
  <script>
  var spicyAhi = {
fishType: "Ahi",
sauce: "Sriracha & Mayo",
price: 100.00,
rice: "White",
ounces: 8
};

//Ask user for amount of spicy ahi to buy
var amount = prompt("How much are you ordering?");
//Display the total amount of ounces the user will buy
var totalOunces = amount * spicyAhi.ounces;
window.alert("Purchasing: " + totalOunces);
//then display the total dollar amount
var totalDollar = amount * spicyAhi.price;
window.alert("Your total price: " + totalDollar);
