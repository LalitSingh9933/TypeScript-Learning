let numbers: number[] =[1,2,3];
let name: string[] =["Alice","Bob"];
console.log(numbers,name);

let fruits: Array<string>=["apple","banana", "mango"];// this valid  style

let mixed:(string|number)[]=[1,"apple", 2, "banana"]; // this mixed array or type

// type safety in array
let nums: number[] =[1,2,3,5];
nums.push(6);
console.log(nums);

export{}