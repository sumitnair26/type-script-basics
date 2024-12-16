//Given an array of positive integers as input, return the maximum value in the array

type numberArray = number[];

const findMaxValue = (inputArray: numberArray) => {
    const maxValue = Math.max( ...inputArray );
    return maxValue;
}

console.log(findMaxValue([5,6,9,10,15,12]));

/* 
    Given a list of users, filter out the users that are legal (greater than 18 years of age)
*/

type userArray = {
    lastName:string,
    firstName:string,
    age:number,
}

const filterUserByAge = (userArray:userArray[]) => {
    return userArray.filter(
        x => x.age >= 18
    )
}

console.log(
    filterUserByAge([{
        firstName:"Sumit",
        lastName:"Nair",
        age:30
    },{
        firstName:"Amit",
        lastName:"Nair",
        age:16
    }])
);
