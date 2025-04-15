`
function name(params?) {
  code block  
}
`;

//function definitions
/*
let x = 'hello earth';
console.log(x);
console.log(x);
console.log(x);

function sayHello() {
  console.log("hello world");
}
sayHello();
*/

/* //functions parameters
function fullName(name, lastname) {
  console.log(`Hello Mr, ${name} ${lastname}`);
}
  

fullName("O'neil", 'Obidiaso');
fullName("Chideria", 'Louis');
fullName("John", 'Doe');
*/

/*
function fullName (firstname, lastname){
  console.log(`Hello, ${firstname} ${lastname}, welcome to cybite academy.`);
}

fullName("O'Neil",'Obidiaso'); // args can not be more than the params, params can be more than args
fullName("John",'Doe'); 
*/

/*
//define function
function personInfo (name, age, streetAddress){
  console.log(`My name is ${name}, I am ${age} old. I live at ${streetAddress}`);
}

//call
personInfo('john', 30, '12 fake street');
personInfo('peter', 50, '50 fake street');
*/

//example
/*
function sayHello(){
  console.log('hello world')
}
for(let i=0; i<3; i++){
  sayHello();
}
*/

//default parameters
/*
function sum(a, b = 34) {
  let sum = a + b;
  console.log(sum);
}

sum(124);
sum(124, 50);
*/

//return statement
/*
function sumOfOddNumbersRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

function sumOfEvenNumbersRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

let sumAll = sumOfOddNumbersRange(1, 73) + sumOfEvenNumbersRange(10, 50);
console.log(sumAll);
*/

`
//------ ways of writing functions ------

//function definition
function name(params) {
  console.log("hello world");
}


//function expression
//1.
let product = function Num(a, b){
    return b * a;
}
console.log(product(3, 4));


//2. anonymous function i.e a function without a name
let division = function (a, b) {
  let result = 0;
  if (b === 0) {
    /*
       b = 1;
    //    return  a / b;
    // or
    //   result = a / b;
       return result;
       */
    return "you can't divide a number by zero";
    }
    return a / b;
    };
    
    console.log(division(2, 0));
    
    3. Arrow function [shorter syntax for functions]
    const subtract = (a, b) => {
      return a - b;
      };
      console.log(subtract(2, 4));
      
      // a shorter way
      const subtract = (a, b) => a - b;
      console.log(subtract(5, 4));
      `;

//function hoisting
// sayHello();
// function sayHello() {
//   console.log("hello world");
// }

// let sayhello = () => "hello world 2";
// console.log(sayhello());

// sayhello = 8;
// console.log(sayhello);