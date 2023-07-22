// 1. Write a function that displays current date & time in your
// browser.
function tellTime() {
     var now = new Date();
     var nowString= now.toLocaleString();
    //  var theHr = now.getHours();
    //  var theMin = now.getMinutes();
     alert("Current date and time: "+nowString);
     
}
tellTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
    
function greeting(){
    let1= prompt("tell me your first name");
    let2= prompt("tell me your last name");
    alert("welcome to our website " + " "+let1+" "+let2);

}
greeting();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function multiple(){
     userinput1=parseInt(prompt("entr your first number"));
     userinput2=parseInt(prompt("entr your second number number"));
     sumOff=userinput1+ userinput2;
     alert("the sum of :"+ sumOff);
    
}
multiple();


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function Calculator(num1,num2,operator){
     let Sum;
     switch(operator){
        case '+':
            sum=num1+num2;
            break;
        case '-':
            sum= num1- num2;
            break;
        case '*':
            sum=num1*num2;
            break;
        case '/':
            sum= num1 / num2;
            break;
        default:
            return "invalid operator";

     }

     return sum;
      

}
const num1 = 10;
     const num2 = 5;
     const operator = '+';
     const result = Calculator(num1, num2, operator);

     // Display the result in the browser
     document.write(`<p>${num1} ${operator} ${num2} = ${result}</p>`); 

    // 12 Write a JavaScript function that accepts a string as a
    //  parameter and find the longest word within the string.
    //  EXAMPLE STRING : 'Web Development Tutorial'
    //  EXPECTED OUTPUT : 'Development'

    function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('w3resource.com', 'o'));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

