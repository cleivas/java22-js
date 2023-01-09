let name = "Clara";
console.log(name);

name = "Lisa";
console.log(name);

console.log(typeof name);

const age = 36*10;
console.log(age)
console.log(typeof age);

// Går ej pga const
// age = 37;

const newName = name;
name = "Leivas";
console.log(newName, name);

const arrayNumbers = [3, 5, 3, 7, 9, 5];
console.log(arrayNumbers);
arrayNumbers[3] = 1000;
console.log(arrayNumbers);
// arrayNumbers = age;

const arrayLetters = arrayNumbers;
console.log(arrayLetters, arrayNumbers);

arrayLetters[0] = 'a';
console.log(arrayLetters, arrayNumbers);
