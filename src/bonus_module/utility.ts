//Pick 

interface Person {
    name: string;
    email?: string;
    contactNo: string;

}


type Contact = Pick<Person, "contactNo" | "email">;

// Omit

type Name = Omit<Person, 'email' | 'contactNo'>

//Partial and Required
//To may all the properties be optional type

type Optional = Partial<Person>
type RequiredProps = Required<Person>;


const person:Readonly <Person> = {
    name: "joy",
    email: 'bijoy@gmail.com',
    contactNo: '5645165'
}

// record type

// type myobj ={
//     a:string,
//     b:string,
//     c:string,
// }

// using Index signature

// type myobj = {
//     [key: string]: string;
// }


// Record type
type myobj = Record<'a'|'b'|'c'|'d',string>

const obj: myobj={
    a:'1',
    b:'2',
    c:'3',
    d:'0'
}