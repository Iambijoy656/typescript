// //Aroow Function
// const createArray =(param:string):string[] => {
//     return [param]
// };

// //Arrow Function
// const createArray1 = <X,Y>(param1:X,param2:Y):[X,Y]=>{
//     return [param1,param2]
// }


// //normal function
// function createArray2<X,Y>(param1:X,param2:Y):[X,Y]{
//     return [param1,param2]
// }


// const result1 = createArray1<string,string>("Bangladesh",'I Love my friend')
// const result2 = createArray1<boolean,Array<string>>(true,["USA"])

// type Name = {name:string}
// const result3 = createArray1<Name,boolean>({name:"Bangladesh"},false)


// // //Spreed operator



// // const myInfo = {
// //     name:'Bijoy',
// //     age:18,
// //     salary:10000000000
// // }
// // // const newData = {...myInfo};


// // const addMeInMyCrushMind =<T> (myInfo:T) => {
// //     const myCrush  = 'kate'
// //     const newData = {...myInfo,myCrush}
// //     return newData;
// // }

// // const result5 = addMeInMyCrushMind(myInfo)
