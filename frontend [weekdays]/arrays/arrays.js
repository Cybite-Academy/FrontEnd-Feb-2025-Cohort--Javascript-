// let name = 'collins';
// console.log('my name is ', name);

//declaring an array
// let fruits = ["Apple", "Orange", "Banana", "Mango", "strawberry"];
// console.log(fruits);
// let oddNumbers = [1, 3, 5, 7];
// console.log(oddNumbers);
/*
let mixedArray = [
  "Apple",
  1,
  "Orange",
  3,
  "Banana",
  5,
  true,
  false,
  undefined,
  null,
];
console.log(mixedArray);
*/

//Access an array
/*
let firstItem = fruits[0];
console.log(firstItem);

let secondItem = fruits[1];
console.log(secondItem);

let fruitsLength = fruits.length;
console.log(fruitsLength);

let lastFruitItem = fruits[fruits.length - 1];
console.log(lastFruitItem);
*/

// let fruits = ["Apple", "Orange", "Banana", "Mango", "strawberry"];
// fruits[0] = "Pawpaw";
// console.log(fruits);
// console.log("@43 ", fruits.length);
// fruits[4] = "Grape";
// fruits[5] = "Guava";
// console.log(fruits);
// console.log("@47 ", fruits.length);

// fruits[7]= 'Coffee';
// console.log(fruits);

// let names = [];
// names[0] = "Collins";
// console.log(names);

// let cars = ["Benz", "Toyota", "Ford", "Bentley", "Lexus"];
// cars.push("lambo");
// cars.push("Limo");
// console.log(cars);

// cars.pop();
// console.log(cars);
// console.log(cars[cars.length - 1]);

// let poppedItems = cars.pop();
// console.log('popped out item: ',poppedItems)
// console.log(cars);

// console.log("b4: ", cars);
// cars.unshift("Nissan");
// console.log("after: ", cars);
// cars.shift();
// console.log(cars);

// let cars = ["Benz", "Toyota", "Ford", "Bentley", "Lexus"];
// let findIndex = cars.indexOf('Toyota');
// console.log(findIndex);

// let reversedArray = cars.reverse();
// console.log(reversedArray);
// console.log(cars);
// let joinedArray = cars.join("/");
// console.log(joinedArray);

let foods = [
  "rice and stew",
  "beans and bread",
  "yam and stew",
  "spaghetti",
  "eba and soup",
  "bread and tea",
  "indomie",
];

//randomise
// let randomFoodIndex = Math.floor(foods.length * Math.random());
// console.log('Your random food for the day is ' + foods[randomFoodIndex]+'.');

//food based on das of the week
// let userInput = 'WEDNESDAY'.toLowerCase();// hardcoded
const prompt = require("prompt-sync")();
const userInput = prompt(
  "Please enter a valid day (Monday to Sunday) or input 'random'to pick a random selection: "
);

// if ("monday" === userInput) {
//   console.log("Your food for Monday is " + foods[0]);
// } else if (userInput === "tuesday") {
//   console.log("Your food for Tuesday is " + foods[1]);
// } else if (userInput === "wednesday") {
//   console.log("Your food for Wednesday is " + foods[2]);
// } else if (userInput === "thursday") {
//   console.log("Your food for Thursday is " + foods[3]);
// } else if (userInput === "friday") {
//   console.log("Your food for Friday is " + foods[4]);
// } else if (userInput === "saturday") {
//   console.log("Your food for Saturday is " + foods[5]);
// } else if (userInput === "sunday") {
//   console.log("Your food for Sunday is " + foods[6]);
// } else {
//   console.log("Invalid input. Please enter a valid day (Monday to Sunday).");
// }

switch (userInput.toLowerCase()) {
  case "Monday":
    console.log("Your food for Monday is " + foods[0]);
    break;
  case "Tuesday":
    console.log("Your food for Tuesday is " + foods[1]);
    break;
  case "wednesday":
    console.log("Your food for Wednesday is " + foods[2]);
    break;
  case "thursday":
    console.log("Your food for Thursday is " + foods[3]);
    break;
  case "friday":
    console.log("Your food for Friday is " + foods[4]);
    break;
  case "Saturday":
    console.log("Your food for Saturday is " + foods[5]);
    break;
  case "sunday":
    console.log("Your food for Sunday is " + foods[6]);
    break;
  case "random":
    let randomFoodIndex = Math.floor(foods.length * Math.random());
    console.log(
      "Your random food for the day is " + foods[randomFoodIndex] + "."
    );
    break;
  default:
    console.log("Invalid input. Please enter a valid day (Monday to Sunday).");
}
