"use strict";
// Variable and DataType in TS
Object.defineProperty(exports, "__esModule", { value: true });
// let name: string = "lalit";
// let  age : number = 24;
// let isActive: boolean = true;
// let scores: number[] =[90, 85, 88];
// let person : [string, number]= ["lalit", 24]
// console.log(name);
// console.log(age);
// console.log(isActive);
// console.log(scores)
// console.log(person);
// function in typescript
//This function is returing string 
function greet(name) {
    return "Hello, ".concat(name);
}
console.log(greet("Lalit Singh"));
//  not return type in ts
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting("Dinesh Singh");
// Optional parameters
function greetUser(name, age) {
    console.log(" ".concat(age || 30, ", ").concat(name));
}
greetUser("Alice");
greetUser("Bob", 26);
//Default parameters
function power(num, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(num, exp);
}
console.log(power(25));
