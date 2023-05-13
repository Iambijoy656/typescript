"use strict";
//key of guard
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString;
    }
}
add("1", "2");
add(1, 3);
function getUser(user) {
    if ("role" in user) {
        return `I am an Admin and my role is ${user.role}`;
    }
    else {
        return `I am a Normal user`;
    }
}
const normaluser1 = { name: "Mr. Kallu" };
const adminuser1 = { name: "Mr gallu", role: "admin" };
console.log(getUser(normaluser1));
console.log(getUser(adminuser1));
//instance of guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('I am making sound');
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log('I am Barking');
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log('I am Meawing');
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog('Garman shepard', 'dog'); // instance of Dog
const animal2 = new Cat('parshian cat', 'cat'); // instance of Cat
getAnimal(animal1);
getAnimal(animal2);
