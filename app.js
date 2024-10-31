// var n = 2;
// console.log(n);
// function newAns(num) {
//     var square = num * num;
//     // var cube = num*num*num;
//     return square;
// }

// var ans1 = newAns(2);
// var ans2 = newAns(4);

// console.log(ans1);
// console.log(ans2);

//hoisting practice
// console.log(x);
// var x = 2;
// console.log(x);

// getname();

// function getname () {
//     console.log("Mallikarjun");
// }
// console.log("program ends");



//-> *******Functions and Variavles in JS *******->///

// console.log(num1);
// var num1 = 2;
// console.log(num1);
// function NewFn() {
//     console.log("namaste Javascript");
//     var teat = 3;
//     return teat;
// }

// var ans = NewFn();
// console.log(ans);
// console.log(window.ans);
// console.log(this.ans);


// --------> Scope and Lexical Scope Chain ---->
// It is the context in which a Variable or function is declared. 
// Scope : Current context of a variable. 
// inner fns have access to the outer fns.
// there are 2 types of scopes.
// 1. Global Scope
// 2. Local Scope

// -------> Temporal Dead Zone ----->
// let/const are hoisted in differnt way. not in global scope but in sepaerate memory allocations. the phase/time btwn the let and const variables hoisted and initialized with a value in it.
// both are hoisted but in temporal dead zone until they get some value assigned to it.
// let/const cannot be acccessed with a window object.
// let/const cannot be redclared.
// to avoid temporal dead zone, always put initialization and declaration at the top of the program.
 
//-------> difference between var/let/const -------->
//var is a global scoped when declared globally, function scoped when declared functionally.
//let/const are local scoped.
//var can be reassigned any value.
//let/const cannot be reassigned any value.
//var is hoisted. let/const are hoisted diiferently. (here temporal dead zone concept comes).
//const cannot be declared without initialization.
// let/const cannot be acccessed with a window object.


// ------> Variable Shadowing ------>
// whenever 2 variables with same name are declared in different scopes then this happens.
// inner variables shadows/takes the presedence over the outer variables within its scope.
// cannot shadow let with var, but, you can shadow var with let.


//------Lexical Scope ------>
//Lexical Environment = local memory + Lexical env of its parent.
// lexical means, In heirarchy, In order.
//whenever a execution context is created. a lexical env is also created eith reference to it.
// the process of going one by one to its parent and checking for the values is called scope chain. or lexical environment chain.

// function a() {
//     function b() {
//         //logic of codes
//         console.log("this is b function");
//     }
//     b(); //b is lexically inside a.
// }
// a(); // a is lexially in global execution.
// console.log("this is a function");


// function global() {
//     function outer() {
//         function inner () {
//             //inner is surrounded by outer lexical scope.
//         }
//     }
// }

// Note* = an inner funtion can access a variavle declared in its outer lexical scope. in any other cases its not possible.

//---> Advantages of Clousures ----->
// 1. Module Design Pattern :
// here i am creating a module which handles user authentication, I am covering fns like login, logout, getuserinfo etc...

// const authModule = (function () {

//     let loggedinuser = null;
// //login function
// function login(username,password) {
//     //all logics here
//     loggedinuser = username, password;
// }


// //logout function
// function logout (){
//     loggedinuser= null;
// }

// //userinfo function
// function getuserinfo() {
//     return loggedinuser;
// }

// return{
//     login, logout, getuserinfo
// };

// })()

// authModule.login("Mallikarjun", "1234er");
// console.log(authModule.getuserinfo());


//2. Currying :
//instead of calling a function with all its arguments at a time, we call function each time with single arguments, that in refer calls another function.

//without currying 
// function add (a,b) {
//     return a + b;
// }

// console.log(add(3, 5));

// //with currying concept applied

// function add (a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const ans = add(3);
// console.log(ans(6));


//3. Memoization :
// memoization optimizes expensive fn calls by caching their results. it's useful for recursive or repetative calculations.

//example : implementing fib series.

// function fibo (n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n <= 1) return n;

//     memo[n] = fibo(n-1, memo) + fibo(n-2, memo);
//     return memo[n];
// }

// console.log(fibo(11));


//4. Data Hiding and Encapsulation.
// Encapsulation hides the internaldetails of ana objext and exposes the necessary details only.
// it improves coe maintainablity and security.

// class person {
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }

//     getName() {
//         return this.#name;
//     }
// }

// const person1 = new person("Basu");
// console.log(person1.getName());

//5. setTimeouts: 
// it allows scheduling of a function to run after a specified delay. it is generally used for async tasks, animations, and event handling.

// function displaymessage (message, delay) {
//     setTimeout(() => {
//         console.log(message);
//     }, delay)
// }

// displaymessage("hellloooooo", 2000);


//----->settimeout and closures interview questions ---->
//1.

// function aheh() {
//     setTimeout(function() {
//         console.log("hello evryone");
//     }, 4000)
// }
// aheh();


// function easa() {
//     setTimeout (function() {

//         console.log("hello");
//     }, 2000)
//     console.log("Hi ");
// }
// easa();


// function printNum () {
//     for (let i=1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i)
//         }, i*1000);
//     }
//     console.log("hello");
// }
// printNum(); 


// function print() {
//     for (var i=1; i<=5; i++) {
//         function close(i) {
//             setTimeout(function() {
//                 console.log(i);
//             }, i*1000);
//         }
//         close(i);
//     }
//     console.log("hi");
// }
// print();


// 2. inner function forming closure with outer function 
// function outer () {
    
//     function inner () {
//         console.log(i);
//     }
//     let i =10;
//     return inner;
// }
// outer()();

// function outest() {
//     var c = 20;
//     function outer(str) {
//       let a = 10;
//       function inner() {
//         console.log(a, c, str);
//       }
//       return inner;
//     }
//     return outer;
//   }
//   outest()("Hello There")(); // 10 20 "Hello There"
// here inner functions have access to all its outer environment.

// var count = 0;
// function increment(){
//   count++;
//   console.log(count);
// }
// console.log(count);
// increment(); //0, 1

// function counter () {
//     var count = 1;
//     return function increment () {
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();

// implementing counter function using constructors.
// function counter () {
//     var count = 1;
//     this.increment = function() {
//         count++;
//         console.log(count);
//     }
//     this.decrement = function() {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new counter();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.decrement();


// function a () {
//     console.log("hello");
// }

// var b = function() {
//     console.log("hello2");
// }
// a();
// b();

// var b = function abc() {
//     console.log("hello");
// }
// b();
// abc(); //it gives error as it was not declared in global scope.


//------>Callback Functions and Event Listeners ----->
// JS is a syncronous and single threaded language deu to callback functions, we can do async things in JS.

// setTimeout(function() {
//     console.log("async funcs");
// }, 1000)

// function x(y) {
//     console.log("x");
//     y();
// }

// x (function y() {
//     console.log("y");
// });

// adding button and onclick increasing the count.
// document.getElementById("clickme").addEventListener("click", function() {
//     console.log("button clicked.")
// })

// using a global variable here below...
// let count = 0;
// document.getElementById("clickme").addEventListener("click", function() {
//     console.log("clicked button", ++count);
// })


// now using closure for data abstraction...
// function attach() {
//     let count = 0;
//     document.getElementById("clickme").addEventListener("click", function() {
//         console.log("button clicked", ++count);
//     })
// }
// attach();


//---------> Async JS and Event loop -------->
// call stack will executes any execution context which enters it.
// call stack has no timer.
// browser has JS engine, which has call stack and both execution contexts.
// browser got many superpowers too.
// 1. local storage space (localstorage)
// 2. timer (setTimeout)
// 3. place to enter the URL. 
// 4. bluetooth access.
// 5. geolocation access.
// 6. DOM APIs.
// 7. console.
// 8. fetch. (used to make connections with external servers)
// JS connects call stack with these superpowers using web API's.

// none of them are part of JS, but browser allows JS callstack to use it.

// console.log("helllo1");
// setTimeout(function ca() {
//     console.log("hello 2");
// }, 1000)
// console.log("hello 3");

// ------> Map, Filter and Reduce ------>
// basically map function is mapping each and every value and transforming it based on given condition.

// const arr = [1, 2, 3, 4, 5];
// function double(x) {
//     return x * 2;
// }
// const doubleArr = arr.map(double);
// console.log(doubleArr);


// Filter : filter function creates an array and store only values which are true;

// function isOdd(x) {
//     return x % 2;
// }
// const oddArr = arr.filter(isOdd);
// console.log(oddArr);

// Reduce : it is a fn which take all values of array and gives single output.
// it reduces a array into single output.

// function summ (arr) {
//     let sum = 0;
//     for (let i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(summ(arr));

// const users = [
//     { firstName: "Alok", lastName: "Raj", age: 23 },
//     { firstName: "Ashish", lastName: "Kumar", age: 29 },
//     { firstName: "Ankit", lastName: "Roy", age: 29 },
//     { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
// ];

// const fullName = users.map((user) => user.firstName + " " + user.lastName);
// console.log(fullName);

// applying reduce method to the above code
// const report = users.reduce((acc, curr) => {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++ acc[curr.age] ;
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;  //to every time return update object
// }, {})
// console.log(report)

// applying filter method to above code
// const output = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstName);
// console.log(output);

//below is the same logic applied using reduce.
// const output = users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//       acc.push(curr.firstName);
//     }
//     return acc;
//   }, []);


// --------> Callback ------->

// 1: Good part : its imp while writing async fns in JS.
// 2: Bad part : Callback Hell, Inversion of Control.

// when we have large codebase and multiple apis ahaving dependency on each other. then we fall into callback hell. 
// it becomes tough to maintain. its also called Pyramid of doom.

// Note : async programming exists in JS bcoz callback Exists.

// -------> Promises ------>
// console.log("promises started.");

// Promises are used to handle async operations in JavaScript.
// Promise is a empty object with some data value in it. this data value holds whatever the function returns.


// const URL = "https://api.github.com/users/alok722";
// const user = fetch(URL);
// // console.log(user);
// user.then(function(data) {
//     console.log(data);
// })

// console.log("hello I am back");

//-------> Async/Await ------->
// async is a keyword used before a function to create a asunc function.

// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.
// async function getData() {
//     return "Namaste JavaScript";
//   }
//   const dataPromise = getData();
//   console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}

// to extract data from the above promise. one way is promise.then
// dataPromise.then(res=>console.log(res));

// const a = new Promise((resolve, reject)=>{
//     resolve("resolved prmose successfully");
// })

// async function getData() {
//     return a;
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(res=> console.log(res));

