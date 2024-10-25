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

setTimeout(function() {
    console.log("async funcs");
}, 1000)

function x(y) {
    console.log("x");
    y();
}

x (function y() {
    console.log("y");
});
