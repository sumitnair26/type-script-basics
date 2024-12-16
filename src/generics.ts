/*
    Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
*/

const getFirstElement = <T>(inputArray : T[]) => {
    return inputArray[0];
}

console.log(getFirstElement<string>(["someString","else in array","new field"]));
console.log(getFirstElement<number>([1,2,3,4,5,6]));

const identity = <T>(input : T):T => {
    //console.log(input);
    return input;
}



identity<String>("Sumit");
identity<number>(33);