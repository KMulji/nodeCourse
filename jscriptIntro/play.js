let name = "Kyan";
let age = 26;
const hasHobbies = true;

function summarizeUsers(userName, Age, HasHobbies) {
    return (userName + ' ' + Age + ' Has Hobbies ' + HasHobbies);
}

const summarizeUsers2 = (userName, Age, HasHobbies) => {
    return userName + ' ' + Age + ' Has Hobbies ' + HasHobbies;
}
console.log(summarizeUsers2(name, age, hasHobbies));

//objects
const person = {
    firstName: "Kyan",
    Age: 26,
    Greet() {
        console.log('hi i am ' + this.firstName);
    }
};
// destructuring

const printName = ({ name }) => {
    console.log(name);
}
console.log(person.Greet());
const { firstNamename, Age } = person;
//array

const hobbies = ['Sports', 'cooking'];
console.log(hobbies.map(hobby => 'hobby : ' + hobby));
hobbies.forEach(hobby => console.log(hobby));
for (let hobby of hobbies) {
    console.log(hobby);
}
//array destructuring

const { hobby1, hobby2 } = hobbies;