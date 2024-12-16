/*
    type User = {
        firstName: string;
        lastName: string;
        age: number
    }
*/

type StringOrNumber = string|number

const printId = (id:StringOrNumber) => {
    console.log("ID is :", id);
}

printId(10);

printId("12");

/* 
    What if you want to create a type that has every property of multiple types/ interfaces 
*/

type Employe = {
    name: string;
    startDate : Date;
}

type Manager = {
    name: string;
    department: string;
}

type TechLead = Employe & Manager;

// type TechLead = {
//     name: string;
//     department: string;
//     startDate : Date;
// }

const t:TechLead = {
    name :"Sumit",
    department:"Software development",
    startDate:new Date()
}

console.log(t);







