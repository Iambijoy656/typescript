type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moyna",
  age: 20,
  profession: "Web Developer",
  address: "Malaysia",
};

const crush2: CrushType = {
  name: "Next lavel web developer",
  profession: "Web Developer",
  address: "USA",
};

type CrrushMarriedType = boolean;
const isCrushMarried: CrrushMarriedType = false;

type CourseNameType = string;
const courseName: CourseNameType = "Next lavel web development";


type OparationType = (x: number, y: number) => number;
const calculate = (
  number1: number,
  number2: number,
  oparation: OparationType
) => {
  return oparation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);

