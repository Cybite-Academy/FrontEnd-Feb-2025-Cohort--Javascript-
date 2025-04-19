`//! you must write object in key - value pairs`

/*
//1. ---- creating an object -----
const student = {
  firstName: "john",
  lastName: "Doe",
  age: 19,
  matricNo: "AF123",
  isMale: true,
  course: "Medicine and Surgery",
  department: "Medicine",
};
*/

//---- accessing an object -----
// using the dot notation
/*
console.log(student.age);
console.log(student.lastName);
console.log(student.matricNo);
*/

//using the square bracket
/*
console.log(student['age']);
console.log(student['matricNo']);
*/

//using the for in loop
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

//2. ----- adding properties -----
/*
const Dog = {};
Dog.name = 'bingo';
Dog.color = 'black and brown mix';
Dog.eyeColor = 'brown';
Dog['specie'] = 'German Shepard'

console.log(Dog);
*/

const student = {
  firstName: "john",
  lastName: "Doe",
  age: 19,
  matricNo: "AF123",
  isMale: true,
  course: "Medicine and Surgery",
  department: "Medicine",
};
//3. ---- change properties data ----
/*
student.firstName = "peter";
student.isMale = false
console.log(student);
*/

//ex
/*
if (student.isMale == false) {
  console.log(
    `Your name is ${student.firstName} ${student.lastName}, age: ${student.age}`
  );
}else{
  console.log(`${student.firstName} ${student.lastName} is not a female`)
}
*/

// ------ removing object properties ------
/*
delete student.department;
console.log(student);
*/

//---- object security -----
// preventing addition or removal or properties
/*
Object.seal(student);
student.university = "Unilag";

delete student.matricNo;
console.log(student);

//! Note: object properties can be edited when the object is sealed
student.firstName = 'Peter'; 
console.log(student);
*/

// preventing any changes from the object
/*
Object.freeze(student);
student.firstName = 'Peter'; 
student.university = "Unilag";
delete student.matricNo;
console.log(student);
*/
