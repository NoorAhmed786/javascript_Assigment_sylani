/*1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/
 
var user1 = prompt("enter your firast name");
var user2 = prompt("enter your last name");
var fullName =" Welcome " + user1 +" "+ user2 ;
var ptint = alert(fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var mobileModel = prompt("enter your favouirte mobile phone model");
var lengthOfModel = mobileModel.length;
var paste = document.write( "mobile phone model : " + mobileModel + "<br>"+" the length of mobile is : "+ lengthOfModel+"<br>");

/*3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/

var countryName = "pakistan";
var pate = countryName.indexOf("n",0);
document.write("string "+" pakistani "+"<br>"+ "index :"+ pate+"<br>");


/*4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.*/

var indentify = "Hello world";
var find = indentify.lastIndexOf("l");

var paste = document.write("string "+" Hello world "+"<br>"+ "index :"+ find+"<br>");

//5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

var country = "pakistani";
var find2 = country.charAt(3);
var paste2 = document.write("string "+" pakistani "+"<br>"+ "index :"+ find2+"<br>");


//6. Repeat Q1 using string concat() method.

var user1 = prompt("enter your firast name");
var user2 = prompt("enter your last name");
var fullName =" Welcome " + user1.concat(user2);
var ptint = alert(fullName);

//7. Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.

var text = "hyderabad";
var updatetName = text.replace("hydera" ,"Islama");
var update = document.write(updatetName+"<br>");


//8. Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;

var para = "Ali and Sami are best friends, they play cicket and footall togather";
// var updatePara = para.replace("and","&");
// var upadate2 = document.write(updatePara+"<br>");

var firstChar = para.indexOf("and");
if (firstChar !== -1) {
para= text.slice(0, firstChar) + "&" + para.slice(firstChar + 12);
 document.write(para+ "<br>");
};

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var num1 = "472";
var updateNum = Number(num1);
var printNum1 = document.write("string :"+"472"+"<br>"+"number :"+updateNum+"<br>");

var num1 = 472;
var updateNum =num1.toString();
var printNum1 = document.write("Number :"+"472"+"<br>"+"string :"+updateNum+"<br>");

// 10. Write a program that takes user input. Convert and
//show the input in capital letters.

var userInput = prompt("enter a  small character");
var convert =document.write( userInput.toUpperCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var userInput = prompt("enter a  small character");
var convert =document.write(userInput[0].toUpperCase()+userInput.slice(1,6));

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var converter = document.write("float :"+"35.36"+"<br>"+ "result"+parseInt(num)+"<br>");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .







// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var str = "University of Karachi";
var splitArray = str.split(" ");
for(i=0; i ==str.length; i++){
    var arry = document.write(splitArray + "<br>")
};

// 17. Write a program to display the last character of a user
// input.

var userInput = prompt("enter the country name");
var result =document.write(userInput.charAt(userInput.length -1));


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";
var count;
 for (i =0 ;  i < str.length(); i++){
    if(the <= str[i]){
        count.append(the);
        document.write()
    }
 }
