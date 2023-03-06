//welcome message
var user = 'Ryan';
var greeting = 'Hello, ' + user + '! Here are the latest Card Reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//price

var price = 20,
 StudentDiscount = .5,
 studentPrice = price - price*StudentDiscount,
priceEl = document.getElementById('price')
studentPriceEl = document.getElementById('student-price');


priceEl.textContent = price.toFixed(2);
studentPrice.textContent = studentPrice.toFixed(3);