type PersonType = {
    name: string,
    age: number,
    address: string
}

type newType = 'name' | 'age' | 'address'; //this is manually

type newTypeUsingkeyOf = keyof PersonType

const a:newType = 'address'
const b:newTypeUsingkeyOf='name' 


function getProperty <X,Y extends keyof X>(obj:X, key:Y){
  return  obj[key];
}

const property = getProperty({name:'Mr X',age:20},'age')
console.log(property)

