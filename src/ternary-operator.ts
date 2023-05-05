// ternary operator

const age: number = 14;

// if (age>18) {
//     console.log('yes')
// }else{
//     console.log('No')
// }

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult)


//Nullish coalescing operator
//Null and undefined

const isAuthenticatedUser = ''
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser? isAuthenticatedUser : "Guest" 
console.log({userName},{userName2})



type Manush = {
    name: string,
    age: number,
    address:{
        city:"No city",
        road:'No road',
        home?:'';
    }
}

const manush1 :Manush={
name:'Manush',
age:100,
address:{
    city:'No city',
    road:'No road'

}
}

const home = manush1.address.home??"No Home"
console.log(home)

function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));