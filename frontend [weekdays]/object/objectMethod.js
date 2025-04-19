/*
const dog = {
    name: 'bingo',
    specie: 'German shepard',
    color: 'brown and black mix',
    bark: function (){
       console.log('dog barks');
     } 
    // bark:()=>{}
    //bark(){}

}

dog.bark();
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName(firstName = this.firstName, lastName = this.lastName){
    this.firstName = firstName;
    this.lastName = lastName
    return `my name is ${this.firstName} ${this.lastName}, my id is ${this.id}`;
  },
};

console.log(person.fullName("Jane", "Mary"));
console.log(person);

