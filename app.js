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
 
//-------> difference between var/let/const -------->
//var is a global scoped when declared globally, function scoped when declared functionally.
//let/const are local scoped.
//var can be reassigned any value.
//let/const cannot be reassigned.
//var is hoisted. let/const are hoisted diiferently. (here temporal dead zone concept comes).
//const cannot be declared without initialization.
