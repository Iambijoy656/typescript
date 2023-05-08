
type MyInfoType = {
    name: string;
    age: number;
    salary: number
    other: boolean
}

const myInfo = {
    name:'Bijoy',
    age:18,
    salary:10000000000,
    other:false,

}
// const newData = {...myInfo};

type MandatoryType = {name:string,age:number,salary:number}
interface MandatoryInterface  {name:string,age:number,salary:number}
const addMeInMyCrushMind =<T extends MandatoryInterface> (myInfo:T) => {
    const myCrush  = 'kate'
    const newData = {...myInfo,myCrush}
    return newData; 
}

const result5 = addMeInMyCrushMind(myInfo)
