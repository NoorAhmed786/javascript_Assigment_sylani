// 1. Write a program that displays current date and time in
// your browser.


var rightNow = new Date();
var dateString = rightNow.toString();
document.write(dateString);


// 2. Write a program that alerts the current month in words.
// For example December.

var currentDate = new Date();
var b = currentDate.toString();
var currentMonth = b.slice(4,7);
if (currentMonth === "Jan"){
    document.write("Current month: January")
}else if(currentMonth === "Feb"){
    document.write("Current month: February")
}else if(currentMonth === "Mar"){
    document.write("Current month: March")
}else if(currentMonth === "Apr"){
    document.write("Current month: April")
}else if(currentMonth === "May"){
    document.write("Current month: May")
}else if(currentMonth === "Jun"){
    document.write("Current month: June")
}else if(currentMonth === "Jul"){
    document.write("Current month: July")
}else if(currentMonth === "Aug"){
    document.write("Current month: August")
}else if(currentMonth === "Sep"){
    document.write("Current month: September")
}else if(currentMonth === "Oct"){
    document.write("Current month: October")
}else if(currentMonth === "Nov"){
    document.write("Current month: November")
}else if(currentMonth === "Dec"){
    document.write("Current month: December")
}
alert(currentMonth);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
alert(nameOfToday);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

if (nameOfToday === "sun"){
    alert("Its Fun Day");
}else if(nameOfToday === "sat"){
    alert("Its Fun Day");
}else{
    alert("its not a Fun Day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var date1 = new Date();
var dayOfMonth= date1.getDate();

if (dayOfMonth < 16)
    alert("First fifteen days of the month");
else{
alert("First fifteen days of the month");
};

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var date = new Date();
var finalCheck =date.getHours();

if (finalCheck < 12){
    alert(finalCheck + " "+"its AM ");
}else{
    alert(finalCheck + " "+"its PM ");
}



// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var today = new Date();
var lastDayOfMonth = new Date(today.getFullYear(2020,11,30));
alert(lastDayOfMonth);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


var startRamadanDate= new Date('june 18, 2015');
var nowDate = new Date();

var findOut = startRamadanDate.getDate() - nowDate.getDate();
var totalDays= Math.floor(findOut/(1000* 3600 * 24));

alert(totalDays);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = +prompt("tell me ur age");

var newDate= new Date().getFullYear();
var findOutYear = newDate - age;

alert("its ur birth year"+findOutYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

var customerName =prompt("tell me your name");
var currentMonth =prompt("current month");
var numberOfUnits =parseFloat(prompt("number of units"));
var chargesPerUnit =parseFloat(prompt("what will you charge"));

var dueDate= 15;
var latePaymentRecharge=50;

var netAmount= numberOfUnits * chargesPerUnit;
  
var latePayment= netAmount * latePaymentRecharge;
var grosspaymentRecharge = netAmount +latePayment;

netAmount = netAmount.toFixed(2);
latePayment = latePayment.toFixed(2);
grosspaymentRecharge = grosspaymentRecharge.toFixed(2);

document.write(customerName);
document.write(currentMonth);
document.write(numberOfUnits);
document.write(chargesPerUnit.toFixed(2));
document.write(netAmount);
document.write(latePayment);
document.write(grosspaymentRecharge);





