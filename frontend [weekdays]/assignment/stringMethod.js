//1
let greeting = "Hello World!";
console.log(greeting);

//2
let language = "JavaScript";
console.log(language.length);

//3
let message = "I Love Coding!";
console.log(message.toLowerCase());
console.log(message.toUpperCase());

//4
let word = "Beginner";
console.log(word.charAt(0));
// console.log(word.charAt(word.length - 1));

let lastIndex = word.length - 1;
console.log(word.charAt(lastIndex));

//5
//slice
let jobTitle = "Frontend Developer";
// let slicedChars = jobTitle.slice(0, 8);
// console.log(slicedChars);

//substring
let slicedChars = jobTitle.substring(0, 7);
console.log(slicedChars);

//6
let sentence = "i am learning Javascript";
console.log(sentence.includes("Javascript"));

//7
let wordReplace = "Javascript is fun!";
console.log(wordReplace.replace("Javascript", "Python"));

//8
let trim = "    Hello, World!    ";
console.log(trim.trim());

//10
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);
console.log(`${firstName} ${lastName}`);