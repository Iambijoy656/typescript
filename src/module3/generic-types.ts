// type GenericArray<T> = Array<T>;

// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Pertian", "kate"];

// const relationWithSalary: GenericTuple<object, string> = [
//   {
//     name: "Pertian",
//     salary: 908432,
//   },
//   "kate",
// ];
// // type SalaryType = {name:string,salary:number}

// interface SalaryType {
//   name: string;
//   salary: number;
// }

// const relationWithSalary2: GenericTuple<SalaryType, string> = [
//   {
//     name: "pertian",
//     salary: 908432,
//   },
//   "kate",
// ];

// const rollNumbers1: GenericArray<number> = [33, 44, 78];
// const rollNumbers2: GenericArray<string> = ["9", "8", "2"];
// const isAdmin: GenericArray<boolean> = [true, false];

// type nameRollType = { name: string; roll: number };
// const namneAndNumber: GenericArray<nameRollType> = [
//   {
//     name: "Bijoy",
//     roll: 1,
//   },
//   {
//     name: "Mr Y",
//     roll: 3,
//   },
// ];
