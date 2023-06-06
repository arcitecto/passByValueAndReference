const personOne = {
  name: {
    first: "Timmy",
    last: "Timtim",
  },
  age: 30,
  location: {
    city: "New York",
    state: "New York",
    zip: 10001,
  },
};

const personTwo = {
  name: {
    first: "Julie",
    last: "July",
  },
  age: 28,
  location: {
    city: "Albany",
    state: "New York",
    zip: 12201,
  },
};
const moveLocation = function (person, location) {
  person.location.city = location.city;
  person.location.state = location.state;
  person.location.zip = location.zip;
};
let homeTown = {
  city: "Rochester",
  state: "New York",
  zip: 14604,
};

moveLocation(personTwo, homeTown);
console.log(personTwo);

function byRef(x) {
  personTwo.location = personOne.location;
}

byRef(personTwo);
console.log(personTwo);

const personThree = {
  name: {
    first: "Cali",
    last: "Timtim-July",
  },
  age: 0,
};

function baby(x) {
  personThree.location = personTwo.location;
}

baby(personThree);
console.log(personThree);

console.log(personThree);

personOne.age = personOne.age + 20;
personTwo.age = personTwo.age + 20;
personThree.age = personThree.age + 20;

function copyBaby(oldBaby) {
  const newBaby = {
    location: {},
  };
  newBaby.location.city = oldBaby.location.city;
  newBaby.location.state = oldBaby.location.state;
  newBaby.location.zip = oldBaby.location.zip;

  return newBaby;
}
const myBabyCopy = copyBaby(personThree);
console.log(myBabyCopy);

let newPlace = {
  city: "Cincinnati",
  state: "Ohio",
  zip: 55555,
};

moveLocation(personThree, newPlace);
console.log(personThree);

personOne.age = personOne.age + 300;
personTwo.age = personTwo.age + 300;
personThree.age = personThree.age + 300;

function clonePerson(oldPerson) {
  const newPerson = {
    age: {},
  };
  newPerson.age = oldPerson.age;
  return newPerson;
}

const newPersonCopy = clonePerson(personOne);
console.log(newPersonCopy);

const changeAge = function (person, age) {
  person.age = age;
};

let newAge = {
  age: 0,
};

changeAge(personOne, newAge);
console.log(personOne);

personTwo.thought = "What time is it?";

let thoughts = {
  thought1: "I'm hungry",
  thought2: "When's dinner?",
  thought3: "Finally!, time to eat",
};

function think(x) {
  personTwo.thought = thoughts;
}

think(personTwo);
console.log(personTwo);
