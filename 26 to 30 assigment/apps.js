//1 Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var customer = parseInt(prompt("Enter a positive integar"));
var roundOff = Math.round(customer);
var floorValue = Math.floor(customer);
var ceilValue = Math.ceil(customer);

var printNumber = document.write("number :" + customer +"<br>"+"round :"+roundOff+"<br>"+"floor :"+floorValue+"<br>"+"ceil :"+ ceilValue+"<br>");


//2 Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var customer = parseFloat(prompt("Enter a negative integar"));
var roundOff = Math.round(customer);
var floorValue = Math.floor(customer);
var ceilValue = Math.ceil(customer);

var printNumber = document.write("number :" + customer +"<br>"+"round :"+roundOff+"<br>"+"floor :"+floorValue+"<br>"+"ceil :"+ ceilValue+"<br>");


// 3 Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var customer = parseFloat(prompt("Enter a number"));
var absoluteNumber = Math.abs(customer);

var printNumber = document.write("AbsoluteNumber :"+ absoluteNumber +"<br>");


//4 Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

  alert("lets guess the number");
 
var randomNumber =Math.floor( Math.random() * 6 ) + 1;
var randomNumber2 =Math.floor( Math.random() * 6 ) + 1;
    alert( "randomNumber : "+ randomNumber);

    alert(  "randomNumber : "+ randomNumber2 );


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
alert("lets start the game TOSS");

var randomNumber =Math.floor( Math.random() * 2 ) + 1;
var coinResult;

if (randomNumber == 2){
    coinResult = alert("head" +" "+"random number value  :"+ randomNumber);
}else{
    coinResult = alert("tails"+" "+"random number value  :"+ randomNumber);
}

//6 Write a program that shows a random number between 1
// and 100 in your browser.

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);

var result = alert(numberOfStars);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
   var userInput = prompt("enter your weight");
   var replaceTheWeight = userInput.replace(/[^\d.]/g, "");
   alert("the weight of user is :"+" "+ replaceTheWeight +kilograms);



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

alert("lets start the game LOTERRY");
var userInput =parseInt(prompt("Enter a random number"));

var randomNumber =Math.floor( Math.random() * 10 ) + 1;
if(userInput === randomNumber){
   alert("congratulation you won!!!! "+" "+ "randomNumber : "+ randomNumber);
}else{
   alert("you loss !!!! " + " "+ "randomNumber : "+ randomNumber );
}
