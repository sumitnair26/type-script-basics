/*
    Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

*/

type keyPressed = "up" | "down" | "right" | "left";

    /*
        enum Direction{
            up, //0
            down, //1
            right, //2
            left //3
        }
    */
    enum Direction{
        up="up",
        down="down",
        right="right",
        left="left"
    }

function doSomething(keyPressed:Direction) {
	// do something.
    // if (keyPressed == Direction.up) {
        return keyPressed;
    // }
}

console.log(doSomething(Direction.up));
console.log(doSomething(Direction.down));
console.log(doSomething(Direction.left));
console.log(doSomething(Direction.right));


enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })