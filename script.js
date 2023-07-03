// ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    } else {
      return this.firstName + " ha la stessa età di " + otherUser.firstName;
    }
  }
}

let user1 = new User("Frodo", "Baggins", 50, "Hobbiville");
let user2 = new User("Samvise", "Gamgee", 38, "Hobbiville");
let user3 = new User("Meriadoc", "Brandibuck", 39, "Hobbiville");
let user4 = new User("Gandalf", "Il Grigio", 7000, "Terra di Mezzo");

// Confronto età
let comparison = user1.compareAge(user2);
console.log(comparison);

let comparison2 = user1.compareAge(user4);
console.log(comparison2);

let comparison3 = user4.compareAge(user2);
console.log(comparison3);

// ESERCIZIO 2

const nameInput = document.getElementById("name-field");
const ownerInput = document.getElementById("owner-field");
const speciesInput = document.getElementById("species-field");
const breedInput = document.getElementById("breed-field");

const animals = [];

class Animal {
  constructor(_name, _owner, _species, _breed) {
    this.name = _name;
    this.owner = _owner;
    this.species = _species;
    this.breed = _breed;
  }
}

const renderList = function () {
  const animalsList = document.querySelector("ul");
  animalsList.innerHTML = "";
  animals.forEach((animal) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${animal.name} ${animal.owner} ${animal.species} ${animal.breed}`;
    const sameOwnerButton = document.createElement("button");
    sameOwnerButton.innerText = "Condivide proprietario?";
    sameOwnerButton.addEventListener("click", function () {
      const ownerMatches = animals.filter(
        (otherAnimal) =>
          otherAnimal !== animal && otherAnimal.owner === animal.owner
      );
      console.log(
        "Proprietari che condividono l'animale",
        ownerMatches.length > 0
      );
    });
    newLi.appendChild(sameOwnerButton);
    animalsList.appendChild(newLi);
  });
};

const formReference = document.querySelector("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  const newAnimal = new Animal(
    nameInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );

  animals.push(newAnimal);

  nameInput.value = "";
  ownerInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";

  renderList();
});
