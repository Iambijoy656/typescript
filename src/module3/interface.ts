type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

const user2: extendedUser = {
  name: "joy",
  age: 908,
  role: "new user",
};

interface Iuser {
  name: string;
  age: number;
}

interface IextendedUser extends Iuser {
  role: string;
}

const users: IextendedUser = {
  name: "Bijoy",
  age: 90,
  role: "unknown",
};

// const userWithAlias:User={
//     name:"Type alias",
//     age:100,
// }

// const userWithInterface:Iuser={
//     name:"Type interface",
//     age:200,
// }

//----------------------------------------------------------------//

//Object , function, Array

//useing alias type
type addNumberType = (num1: number, num2: number) => number;
const addNumbers: addNumberType = (num1, num2) => num1 + num2;

//useing interface type
interface IAddNumbers {
  (num1: number, num2: number): number;
}
const addNumber: IAddNumbers = (num1, num2) => num1 + num2;

// number type array
const rollNumbers: number[] = [1, 2, 5];

// using type alias array
type rollNumberType = number[];
const rollNumber: rollNumberType = [1, 3, 5];

// using interface type array
interface IRollNumbers {
  [index: number]: string;
}
const rollNumberss: IRollNumbers = ["3", "4", "0"];
