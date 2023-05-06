// Generic interface

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush: CrushInterface<boolean, string> = {
  name: "Kate",
  husband: true,
  wife: "monu",
};

const crushed2: CrushInterface<string> = {
  name: "Kate",
  husband: "Bijoy",
};

interface HusbandInterface {
  name: string;
  salary: number;
}
const crush3: CrushInterface<HusbandInterface> = {
  name: "Crush",
  husband: {
    name: "Bijoy",
    salary: 8932,
  },
};

interface PersonInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
  name: "Kate",
  husband: {
    name: "Bijoy",
    age: 30,
  },
  wife: {
    name: "cokina",
    age: 20,
  },
};

type GenericArray<T> = Array<T>;

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Pertian", "kate"];

const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "Pertian",
    salary: 908432,
  },
  "kate",
];
// type SalaryType = {name:string,salary:number}

interface SalaryType {
  name: string;
  salary: number;
}

const relationWithSalary2: GenericTuple<SalaryType, string> = [
  {
    name: "pertian",
    salary: 908432,
  },
  "kate",
];

const rollNumbers1: GenericArray<number> = [33, 44, 78];
const rollNumbers2: GenericArray<string> = ["9", "8", "2"];
const isAdmin: GenericArray<boolean> = [true, false];

type nameRollType = { name: string; roll: number };
const namneAndNumber: GenericArray<nameRollType> = [
  {
    name: "Bijoy",
    roll: 1,
  },
  {
    name: "Mr Y",
    roll: 3,
  },
];
