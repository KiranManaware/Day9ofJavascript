// Spread Operator:it is the operator which is used to add two or more array and objects in the new arrray and  object
let num1=[12,14,15,126,56];
let num2=[22,23,24,25,26];
// console.log(num1,num2)
// let n=num1+num2;
// console.log(n);
// spread operator
let newNum=[...num1,...num2];
console.log(newNum)
// console.log(...num1,...num2)
