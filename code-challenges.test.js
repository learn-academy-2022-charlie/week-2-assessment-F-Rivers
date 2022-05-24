// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.
// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// b) Create the function that makes the test pass.

// INSTRUCTOR EXAMPLE completed during class May 20th 



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
    // the test should take the const numX and check if it is divisible by 3

describe ("div3", ()=> {
    it("returns if the number is evenly divisible by 3 or not", () => {
        const num1 = 15
    expect(div3(num1)).toEqual("15 is divisible by 3")
    })
})
// Expected output: "15 is divisible by three"

describe ("div3", ()=> {
    it("returns if the number is evenly divisible by 3 or not", () => {
        const num2 = 0
        expect(div3(num2)).toEqual("0 is divisible by 3")
    })
})
// Expected output: "0 is divisible by three"

describe ("div3", ()=> {
    it("returns if the number is evenly divisible by 3 or not", () => {
        const num3 = -7
        expect(div3(num3)).toEqual("-7 is not divisible by 3")
    })
})
// Expected output: "-7 is not divisible by three"

//I got RED 
    // ● div3 › returns if the number is evenly divisible by 3 or not
    // ReferenceError: div3 is not defined

// b) Create the function that makes the test pass.

const div3 = (number) => {
    if(number % 3 == 0) {
        return `${number} is divisible by 3`
    } else {
        return `${number} is not divisible by 3`
    }
}
// I got GREEN 
// ✓ returns if the number is evenly divisible by 3 or not (2 ms)
// ✓ returns if the number is evenly divisible by 3 or not
// ✓ returns if the number is evenly divisible by 3 or not (1 ms)



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.≥

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// // the function should contain a .slice() of the array to get each character on a string 
// // it should also contain a .toUpperCase() to change the first letter of the string 

// // const capFirst = (randomNouns1) => {
// //     return randomNouns1.charAt(0).toUpperCase() + randomNouns1.slice(1)
// // }

// expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
// expect(capFirst(randomNouns1)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

// I continue to get RED
//   ● Test suite failed to run
    // ReferenceError: capFirst is not defined
    // TypeError: randomNouns1.charAt is not a function


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// const capFirst = (string) => {
//     return string.toUpperCase().charAt(0)
// }
// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

// expect(capFirst(vowelTester1)).toEqual(1)
// expect(capFirst(vowelTester2)).toEqual(0)
// expect(capFirst(vowelTester3)).toEqual(2)

// I got RED 
//● Test suite failed to run
//ReferenceError: capFirst is not defined

// b) Create the function that makes the test pass