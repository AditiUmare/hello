// 1. Add a string and a number
let str = "5";
let num = 10;

let result1 = str + num;  
console.log("String + Number:", result1); 

// 2. Subtract a string from a number
let result2 = num - str;  
console.log("Number - String:", result2);  

// 3. Use the == operator to compare a boolean and a number
let bool = true;  
let result3 = (bool == 1);
console.log("Boolean == Number:", result3); 

// 4. Use the + operator to add a boolean and a string
let result4 = bool + str;  
console.log("Boolean + String:", result4);  // Output: "15"

// 5. Example of explicit type conversion
let ex = Number(str); 
console.log("Explicit conversion of String to Number:", ex); 
