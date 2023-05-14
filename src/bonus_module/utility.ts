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
