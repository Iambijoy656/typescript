//inyterface

interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car implements Vehicle {
  constructor(public name: string, public brand: string,public model:number) {}

  startEngine(): void {
    console.log("I am starting Engine...");
  }
  stopEngine(): void {
    console.log("i am stopping engine...");
  }
  move(): void {
    console.log("I am moving...");
  }
 
}

const vehicle1 = new Car('Car', 'Audi',2020)


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
