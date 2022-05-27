// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: The console.log will output the characters in the string separated by commas 
// b) Verify and explain: The .split() will access all the characters and split them individually. 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: The console.log will output 'Hello, LEARN Student' 
// b) Verify and explain: I was incorrect, there needs to be a 'return' in order for the function to know what to output. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: The console.log(multBy2) will output the array multiplied by 2
// b) Verify and explain: The array is being accessed by .map() and iterated to by multiplied


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: The array is being divided by 2 and whichever answers do not equal 0, will be odd. 11, 13, 15
// b) Verify and explain: The array is being accessed by .filter() to divide each number by 2, looking for those not equal to zero. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: The console.log will output "JavaScript"
// b) Verify and explain: The zero index of the languages array is "JavaScript" 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: The console.log will output " George, Bravo, 2022"
// b) Verify and explain: I was wrong, it actually output the class Learn and an array with the corresponding answers 
        // Learn { student: 'George', cohort: 'Bravo', year: 2022 }
