const greetUser = (userName:string) => {
    console.log("Hello", userName);
}

greetUser("Sumit");

const findSum = (numb1:number, numb2:number):number => {
    return numb1+numb2;
}

 console.log("Sum :",findSum(5,7));

const isLegal = (age:number):boolean => {
    if (age>=18) {
        return true;
    }else{
        return false;
    }
}

console.log("is Leagal", isLegal(31));

//Create a function that takes another function as input, and runs it after 1 second.

function runAfter1sec(fn: ()=> void) {
    setTimeout(fn, 1000)
}

runAfter1sec(()=>{
    console.log("This function called after 1 sec");
})
