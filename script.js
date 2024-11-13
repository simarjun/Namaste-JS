//1: print hello world
// console.log("hello Javascript.");
// const name = "Arjun";
// console.log(name);

//2: print the numbers using loop.
// console.log("using for loops")

// for (let i=1; i<=10; i+=2) {
//     console.log(i);
// }

// console.log("using while loops");

// let i =1;
// while (i <= 10) {
//     console.log(i);
//     i+=2;
// }

// console.log("using do-while loops");

// let i =1;
// do {
//     console.log(i);
//     i+=2
// } while (i<= 10);


//3: write a function to add two numbesrs and return the result.
// function addNumbers(a, b, c, d) {
//     return a+b+c+d;
// }

// let result = addNumbers(1, 2, 3, 4);
// console.log(result);
// console.log(addNumbers(1, 2, 3, 4));


//4: Create a function to calculate the area of a rectangle given its width and height.
// function calculateArea(w, h) {
//     return w * h;
// } 
// console.log(calculateArea(10, 2));

// const area = (w, h) => {
//     return w * h;
// }

// console.log(area(10, 2));
// console.log("area of rectangle is: "+area(10, 2) );


//5: function returns the reversed version string
// let str = "Mallikarjun";
// function reverseStr (str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseStr(str));


//6: Function to check even and Odd numbers.
// function checkNum(num) {
//     if (num % 2 == 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }

// console.log(checkNum(13));

//7: Check a function if it is a leap year.
// function checkLeapYear (year) {
//     if (year % 4 == 0) {
//         return "yes";
//     } else return "no";
// }

// console.log(checkLeapYear(2021));


//8: find sum of all elements in an array.
// let arr = [1, 2, 3, 3, 5];

// let sum =0;
// for (let i=0; i<arr.length; i++) {
//     sum += i;
// }
// console.log(sum);

//9: Create an object and add a method

// let car = {
//     make : "Toyota",
//     model: "Innova Crysta",
//     year: "2024"
// };

// car.startEngine = function(){
//     console.log("engine Started");
// }

// console.log(car);
// car.startEngine();


//10:  Change the text of a paragraph on a webpage

// create a paragraph on html file then do below.
// let paragraph = document.getElementById("myParagraph");
// console.log(paragraph);
// paragraph.textContent = "this is the modified paragraph";

//11: Create a button dynamically and add it to the webpage

//create a div in html and do follow below.
// let container = document.getElementById("container");
// let button = document.createElement("button");
// button.textContent= "clik me";
// container.appendChild(button);

//12: displayed an alert when the button clicked 

// create a button on the html  page and follow below.
// let button = document.getElementById("clickme");
// button.addEventListener("click", () => {
//     alert("button clicked...")
//     console.log("button clicked");
// })


//13: calculates the factorial(onclick of a button);

// function factorial(num) {
//     if (num ==0 || num == 1) {
//         return num;
//     } else {
//         let fact =1;
//         for (let i=1; i<=num; i++) {
//             fact *= i;
//         }
//         return fact;
//     }
// }
// console.log(factorial(5));


//14: random number between a given range
// function getRandom(min, max) {
//     return Math.floor(Math.random() *(max-min+1))+ min;
// }

// console.log(getRandom(50, 100));


//15: returns a new array of even numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filterEvens(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(filterEvens(arr));
// console.log(arr);


//16: Use `map()` to double all the elements
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function doubleNum (arr) {
//     return arr.map(num => num*2);
// }

// console.log(doubleNum(arr));
// console.log(arr);


//17: Find the largest element using reduce()

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function largestNum (arr) {
//     return arr.reduce((max, current) => 
//         current > max ? current : max)
// }

// console.log(largestNum(arr));
// console.log(arr);


//18: Remove all occurrences of a specific element

// let arr = [1, 1, 3, 1, 5, 6, 1, 8, 2];
// let target = 1;

// function removeDuplicates(arr, target) {
//     return arr.filter(item => item != target);
// }

// console.log(removeDuplicates(arr, target));
// console.log(arr);


//19: Display the current date and time

// function getCurrentDateandTime () {
//     let currentDate = new Date();
//     return currentDate.toLocaleString();
// }

// console.log(getCurrentDateandTime());


//20: try-catch block to handle an error of API fetch


