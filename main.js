//**       Number 1   .length
let cars = ['Ford','camry','tesla','BMW']
console.log(cars.length)


// Number 2    .concat()
let moreCars = ['lexus','jeep','Lambo', 'Honda']
let totalCars = moreCars.concat(cars)
console.log(totalCars)


//   Number 3 IndexOf() & lastIndexOf()
let hondaIndex = totalCars.indexOf('Honda')
console.log(hondaIndex)

let fordIndex = totalCars.lastIndexOf('Ford')
console.log(fordIndex)


//   Number 4  .join()

let stringOfCars = totalCars.join()
console.log(stringOfCars)


// Number 5    .split()

let carsFromString = stringOfCars.split(',')
console.log(carsFromString)


// Number 6   .reverse()
let carsInReverse = totalCars.reverse()
console.log(carsInReverse)


//  Number 7  .sort()
let alphabeticalCars = carsInReverse.sort()
console.log(alphabeticalCars)


// Number 8  .slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(3,6)
console.log(reptiles)


// Number 9  .splice()
let removedReptiles = pets.splice(3,2)
console.log(removedReptiles)
console.log(pets)


// Number 10  .pop()
let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)


// Number 11 .push()
pets.push(removedPet)
console.log(pets)

// Number 12  .shift()
console.log(pets.shift())

// Number 13 .unshift()
pets.unshift('turtle')
console.log(pets)


/// Number 14 .forEach()
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
// my function
const addTwo = (num, index, arr) => num + 2;
// add 2 to each individual item in array
numbers.forEach(addTwo)

console.log(numbers)




