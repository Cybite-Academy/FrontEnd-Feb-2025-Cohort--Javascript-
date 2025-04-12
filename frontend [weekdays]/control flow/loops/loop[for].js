// for loop
`Pseudo code
for (condition){
 code block
}
 `;

/*
console.log("hello world 1");
console.log("hello world 2");
console.log("hello world 3");
console.log("hello world 4");
console.log("hello world 5");
*/

`for (init; limit/condition; order_of_count){
  code block
}`;
`i++  it means i = i + 1
i = 0;
i++ i.e... i = 0 + 1
`;
// ex: 1
/*
for (let i = 0; i < 5; i++) {
  console.log("hello world");
}
  */

/*
for (let i = 5; i <= 5; i++){
  console.log('hello world', i);
}
  */

//ex: 2
// for (let i = 1; i <= 5; i++) {
//   console.log("hello ife");
// }

// ex3
// for (let i = 1; i <= 5; i+=4) {
//   console.log(i);
// }
/*
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("\n\n\n");

for (let i = 1; i <= 100; i += 30) {
  console.log(i);
}
  */

//ex4
// for(let count= 0; count < 100; count+=20){
//     console.log(count);
// }

//ex5
// for (let init = 5; init >= 0; init--) {
//   console.log(init);
// }

// for (let init = 40; init >= 0; init-=15){
//   console.log(init);
// }

//do not do
`
1. do not exclude the increment or decrement
for (let init = 5; init>=0;) {
  console.log(init);
}

2. do not exclude your limit
for (let init = 5; ; init--) {
  console.log(init);
}

3. do not write wrong limit because your loop won't run
for (let init = 5; init < 0; init--) {
  console.log(init);
}
`;

//exercise:
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i; // or sum += i
// }
// console.log(sum);

// let product = 1;
// for (let i = 1; i <= 10; i++) {
//   product = product * i; // or sum += i
// }
// console.log(product);

// let sumOfEven = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sumOfEven += i;
//   }
// }
// console.log(sumOfEven);
