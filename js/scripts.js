var galToLt = function(gallons) {
	gallons = prompt("How many gallons:")
  return gallons / 0.26417;
};
alert(galToLt());

var ozToG = function(ounces) {
	ounces = prompt("How many Ounces:")
  return ounces / 0.035274;
};
alert(ozToG());

var cupsToPts = function(cups) {
	cups = prompt("How many cups:");
  return cups * 0.5;
};
alert(cupsToPts());

var qtsToPts = function(quarts) {
	quarts = prompt("How many quarts:");
  return quarts * 2;
};
alert(qtsToPts());
