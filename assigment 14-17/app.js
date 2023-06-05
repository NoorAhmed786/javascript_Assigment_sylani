

//1. Declare an empty array using JS literal notation to store
// student names in future.

let list_1=[
    studntsName="",
]; ///literal notation



// 2. Declare an empty array using JS object notation to store
// student names in future.

 let list2=[
    // "studntsName"="",
 ];  //JSON


 // 3. Declare and initialize a strings array.

 let customerName=["ahmed","noor","waqaz","moiz"];


 // 4. Declare and initialize a numbers array.
  let num=[11,34,23,54,61,78];


//5. Declare and initialize a boolean array.

let booleanName=[true,false];

//6. Declare and initialize a mixed array.

let mixedArray=[1,"noor","font off",true,];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//     BS, BCOM, MS, M. Phil., PhD). Show the listed 
//     qualifications in your browser like:


let educationDepartment=[1+" SSC"+"<br>"+2+" HSC"+"<br>"+3+" BCS"+"<br>"+4+" BS"+"<br>"+5+" BCOM"+6+" MS"+"<br>"+7+" M .Phil"+"<br>"+8+" PHD"+"<br>"+"<br>"+"<br>"+"<br>"];
  document.write("Qualification <br>");
  document.write(educationDepartment);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

let studntsName1=["moiz","Noor","Fiza"];
let studntsScore=[340,450,260];
let result_1=340/500*100;
console.log(result_1);
let result_2=450/500*100;
console.log(result_2);
let result_3=260/500*100;
console.log(result_3);

document.write("Score of moiz is "+studntsScore[0]+" percentage= "+ result_1+"%"+"<br>");
document.write("Score of noor is "+studntsScore[1]+" percentage= "+ result_2+"%"+"<br>");
document.write("Score of fiza is "+studntsScore[2]+" percentage= "+ result_3+"%"+"<br>"+"<br>"+"<br>");


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

let studentsScore=[230,490,350,120];
 let ascend=studentsScore.sort();
    document.write("Scores of students : "+studentsScore+"<br>");
    document.write("orders scores of students : "+ascend+"<br>"+"<br>"+"<br>");


// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
 
let cat=["This","is","my","cat"];
let catString= cat.join();
console.log(catString);
 
document.write("array: "+cat+"<br>");
document.write("string: "+catString+"<br>"+"<br>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

let eletricStore=[
    tool_1="keyboard",
    tool_2="mouse",
    tool_3="printer",
    tool_4="monitor"
];
document.write(eletricStore[0]+"<br>");
document.write(eletricStore[1]+"<br>");
document.write(eletricStore[2]+"<br>");
document.write(eletricStore[3]+"<br>"+"<br>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
   
let eletricStore2=[
    tool_1="keyboard",
    tool_2="mouse",
    tool_3="printer",
    tool_4="monitor"
];
document.write(eletricStore[3]+"<br>");
document.write(eletricStore[2]+"<br>");
document.write(eletricStore[1]+"<br>");
document.write(eletricStore[0]+"<br>"+"<br>");


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:
 
let store=["Apple","samsung","Motrola","Nokia","Sony","Haier"];
  
document.write(" <label>Choose a phone:</label>")
 document.write(`<select><option> ${store[0]} </option><option> ${store[1]} </option><option> ${store[2]} </option><option> ${store[3]} </option><option> ${store[4]} </option><option> ${store[5]} </option></select><br><br>`);



// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array

let cityNames=["karachi","lahore","islamabad","Quetta","peshawar"];
let selectedCity=cityNames.slice(1,4);
console.log(selectedCity);

document.write("cities list: "+cityNames+"<br>");
document.write("selected cities: "+ selectedCity+"<br>"+"<br>");


//9. Initialize an array with color names. Display the array
// elements in your browser

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser

let colorNames=["red","blue","yellow","green","pink"];
let userInput=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
// let ColourNamesAdd= colorNames.unshift(userInput);
document.write(colorNames.unshift(userInput));
document.write(colorNames +"<br>");


// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.

let colorNames1=["red","blue","yellow","green","pink"];
let userInput2=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
document.write(colorNames1.push(userInput2));
document.write(colorNames1 +"<br>");


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.

let colorNames3=["red","blue","yellow","green","pink"];
let userInput3=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
document.write(colorNames3.push(userInput2));
document.write(colorNames3 +"<br>");

// d. Delete the first color in the array. Display the updated
// array in your browser

let colorNames4=["red","blue","yellow","green","pink"];
let userInput4=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
document.write(colorNames4.pop(userInput2));
document.write(colorNames4 +"<br>");


// e. Delete the last color in the array. Display the updated
// array in your browser.

let colorNames5=["red","blue","yellow","green","pink"];
let userInput5=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
document.write(colorNames5.push(userInput2));
document.write(colorNames5 +"<br>");


// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.

let colorNames6=["red","blue","yellow","green","pink"];
let userInput6=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
document.write(colorNames6.splice(2,0 ,userInput2));
document.write(colorNames6 +"<br>");



// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colorNames7=["red","blue","yellow","green","pink"];
let userInput7=prompt("Which colour do you want to add in the begining \n red \n blue \n yellow \n green \n pink" );
document.write(colorNames7.splice(2,3 ,userInput2));
document.write(colorNames7 +"<br>");
