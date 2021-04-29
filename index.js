const lastNames = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]
let myLastName = prompt("What is your last name?")

lastNames.push(myLastName) //myLastName is added at the end of lastNames
console.log("Here is the list with your last name in it = ", lastNames)

lastNames.sort() // lastNames change posizions = I,Mac,MAs,NEv,Ponc,Rico
console.log("Here is the list in alphabetical order = ", lastNames)

console.log("Your last name position is = ", lastNames.indexOf(myLastName))

const uppercased = lastNames.map(name => name.toUpperCase()); //uppercase exists with uppercased names
console.log("All the last names are Uppercase-last-names: ", uppercased);


//cannot find a way to do the challenge

// const newArray = lastNames.map(name => [name, name.toUpperCase])
// console.log("This is the New List = ", newArray)

// const newArray = []
// for (const lastName of lastNames) {
//   newArray.push([lastName, lastName.toUpperCase])
// }
// console.log("This is the New List = ", newArray)