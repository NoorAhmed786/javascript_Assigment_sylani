//  1 Declare and initialize an empty multidimensional array.
// (Array of arrays)

let num=[[],[],[]];


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let arr1 = [[0,1,2,3]];
let arr2 =[[1,0,1,2]];
let arr3 = [[2,1,0,1]];
let print = document.write(arr1+"<br>"+arr2+"<br>"+arr3+"<br>");

// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 0; i<11; i++){
    let store=[i];
    document.write(store+"<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// take input from the user
const number = parseInt(prompt('Enter an integer: '));
let length = parseInt(prompt("enter a length"));

//creating a multiplication table
for(let i = 1; i <= length; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    document.write(`${number} X ${i} = ${result}<br>`);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple","banana" ,"mango" ,"orange","stawberry"];
for (var i = 0; i <= 4; i++) {
        // document.write(fruits[i]+"<br>"+"<br>");
        document.write("element at "+ i +" "+ fruits[i]+"<br>");

}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var counting = [1,2,3,4,5,6,7,8,9,10];
// =======  a ======
// for(var i = 1; i<=10; i++){
//     document.write( i );
// }
// // ======= b ====
// for(var i = 1; i<=10; i++){
//     document.write( i);
// }

// // ======= c ====
// for(var i = 0; i<=length; i++){
//     var result = i*20
//     document.write( result);
// }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


let bakers=["cake", "apple pie", "cookie", "chips", "patties"]
let customer=prompt("order your menu")
for (var i = 0; i <= 4; i++) {
    if (customer === bakers[i]) {
        alert( customer +" is availabe");
        break;
    }
    else{
        alert("we are sorry "+customer +" is not available");
        break;
    }
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var numbers =[24, 53, 78, 91,12];

var largest = Math.max(numbers);

var result = document.write(largest);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var numbers =[24, 53, 78, 91,12];

var largest = Math.min(numbers);

var result = document.write(largest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
var numbers= 5;
for(let i = 5; i <= 100; i++) {

    // multiply i with number
    const result = i * numbers;

    // display the result
    document.write(`${result}`);
}



