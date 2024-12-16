/* 
    Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
*/

interface User {
    name: string,
    lastName: string,
    email?: string,
    age:number
}

const checkIsLegal = (user: User):boolean => {
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

console.log(checkIsLegal({
    name:"Sumit",
    lastName:"Nair",
    age:30
}));