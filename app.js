//Make a function that will return any given string into all caps followed by the same string all lowercase.
const makeUpperThenLowerCase =(string)=> {
   const upperCase = string.toUpperCase()
   const lowerCase = upperCase.toLowerCase()
   console.log(upperCase)
   console.log(lowerCase)
}
makeUpperThenLowerCase("susan")


//capilizeAndLowercase("Hello") // => "HELLOhello"
const string = "Hello"
console.log(string.toUpperCase() + string.toLowerCase())

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
const halfRound = (number) => {
    result = Math.floor(number /2)
    console.log(result)
}
halfRound(9)


//findMiddleIndex("Hello") // => 2

const findMiddleIndex = (string) => {
    if(string.length % 2 === 1) {
        let index = Math.floor(string.length/2)
        console.log(index)
    }else {
        let index = Math.floor(string.length/2) - 1
        console.log(index)
    }
}
findMiddleIndex("Hello World")

//findMiddleIndex("Hello World") // => 5 (use above function)


//Make a function that uses slice() and the other functions you've written to return the first half of the string

const firstHalfSlice = (string) => {
   
    const halfSlice = string.slice(0, string.length/2)
    console.log(halfSlice)
}
firstHalfSlice("Hello World")
//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"
//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

const halfAndHalf = (string) => {
    const firstHalfSlice = string.slice(0, string.length/2).toUpperCase()
    const lastHalfSlice = string. slice(string.length/2, string.length).toLowerCase()
    console.log(firstHalfSlice + lastHalfSlice)
}
halfAndHalf("Hello World")
//hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.

//capilizeAndLowercase("Hello") // => "HEllo"
//capilizeAndLowercase("Hello World") // => "HELLO world"
//Optional Code Challenge (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

//Make a function that takes any string and capitalizes any character that follows a space.

//capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Pr

const firstCapitalLetter = (string) => {
    string = string.toLowerCase().split(' ');

    for(let i = 0; i < string.length; i++) {
        string[i] = string[i].split('');
        string[i][0] = string[i][0].toUpperCase();
        string[i] = string[i].join('')
    }
    console.log(string.join(" "))
    
}
firstCapitalLetter("hey friends! practice practice practice!")
