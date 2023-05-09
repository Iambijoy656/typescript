const arrOfNumbers = [1, 2, 3, 4];
const arrOfString = arrOfNumbers.map((number) => number.toString());
console.log(arrOfString);

type AreaNumber = {
  height: number;
  weidth: number;
};

type W = AreaNumber["height"]; //Look up type
type H = keyof AreaNumber; // 'height'| 'width'

type AreaString = {
  height: string;
  weight: string;
};


type AreaReadOnly ={
   readonly height: number;
   readonly weidth: number;
}

type Volume = {
    height: number;
    width: string;
    depth: number;
}


type Area<T> = {
    // [key in keyof Volume]: Volume[key]
   readonly [key in keyof T]:T[key]
}

const area1:Area<{height:number,weidth:number}> = {height:10,weidth:10};



const rectangularArea: AreaReadOnly = {
  height: 10,
  weidth: 30,
};





// const obj = {
//     name: 'Bijoy'
// }

// obj['name']



// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

//     const item = arr[index];
  
//     return item[key];
  
//   }
  
  
  
//   const userss = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
//   console.log(getArrayItem(userss, 0, 'name'))