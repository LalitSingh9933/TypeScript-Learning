// Variable and DataType in TS

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
function greet(name: string):string{
    return `Hello, ${name}`;

}
console.log(greet("Lalit Singh"));

//  not return type in ts
function greeting(name: string):void{
    console.log(`Hello ${name}`);
}
greeting("Dinesh Singh");

// Optional parameters
 function greetUser(name: string, age?:number){
    console.log(` ${ age || 30}, ${name}`);
 }
 greetUser("Alice");
 greetUser("Bob", 26);

 //Default parameters

 function power (num: number, exp: number =2){
    return num** exp;
 }
 console.log(power(25));  //625

export{}