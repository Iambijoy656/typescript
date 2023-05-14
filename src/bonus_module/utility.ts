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


const person: Person = {
    name: "joy",
    email: 'bijoy@gmail.com',
    contactNo: '5645165'
}

person.name = 'korim'