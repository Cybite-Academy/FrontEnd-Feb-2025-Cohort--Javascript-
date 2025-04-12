// const proteins = ['eggs', 'fish', 'meat', 'milk'];
// proteins[0]
// proteins[1]

const foodItems = [
  "Pizza",
  "Burger",
  "Sushi",
  "Tacos",
  "Pasta",
  "Fried Rice",
  "Salad",
  "Steak",
  "Sandwich",
  "Ramen",
  "Curry",
  "Doughnuts",
  "Ice Cream",
  "Chicken Wings",
  "Pancakes",
];

// for (let i = 0; i < foodItems.length; i++) {
//   console.log(foodItems[i]);
// }

// for of loop. used to iterate or access an array
// for( let value of foodItems){
//     console.log(value)
// }

// loop control statement
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//     if (i == 5 || i == 7) {
//         continue;
//     }
//     console.log(i);
// }

for (let value of foodItems) {
  console.log(value);
  if (value.toLowerCase() === "steak") {
    break;
  }
}
