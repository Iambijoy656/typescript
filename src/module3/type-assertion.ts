let emni: any;

emni = "Next level web development";

(emni as string).length;
<string> emni.length;


function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted value is ${value}`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram(1500) as string;

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
