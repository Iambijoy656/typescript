"use strict";
//inyterface
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I am starting Engine...");
    }
    stopEngine() {
        console.log("i am stopping engine...");
    }
    move() {
        console.log("I am moving...");
    }
}
const vehicle1 = new Car('Car', 'Audi', 2020);
//abstruct class
// abstract class Vehicle{
//       constructor(public name: string, public brand: string,public model:number) {}
//  abstract startEngine(): void 
//  abstract stopEngine(): void 
//  move(): void{
//     console.log('I am moving')
//  }
// }
// class Car extends Vehicle {
//     startEngine(): void {
//         console.log('I am Starting')
//     }
//     stopEngine(): void {
//         console.log('I am stoping')
//     }
// }
// const car1 = new Vehicle('Car','Honda',2025)
