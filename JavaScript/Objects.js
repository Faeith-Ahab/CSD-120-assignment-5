
// OBJECT JS

// 1. Alert "John" by extracting information from the person object.

const personone = {
    firstName: "John",
    lastName: "Doe"
  };
  
console.log(personone.firstName); 

//2. Add the following property and value to the person object: country: "Uganda".

const persontwo = {
   firstName: "John",
   lastName: "Doe"
};

persontwo.country = "Uganda";

console.log(persontwo); 


//3. Create an object called person with name =John, age =50. Then, access the object to alert ("John is 50").


const personthree = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

console.log(personthree.firstName + " " + personthree.lastName + " " + "is" + " " + personthree.age + " " + "years old.");
