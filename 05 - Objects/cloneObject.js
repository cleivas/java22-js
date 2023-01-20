const person = {
    name: 'Clara',
    occupation: 'Educator',
    mood: {
        preCoffee: 'bad',
        postCoffee: 'great',
        // sayMoodPreCoffee(){
        //     console.log(this.name);
        // }
    },
}

const personCopy = person;
personCopy.name = 'Max';

const personObjectAssign = {};
Object.assign(personObjectAssign, person);
personObjectAssign.name = 'Frida';

console.log(person.name, personObjectAssign.name);

personObjectAssign.mood.preCoffee = 'New mood';
console.log(person.mood.preCoffee, personObjectAssign.mood.preCoffee);


const structClone = structuredClone(person);
structClone.mood.preCoffee = 'Even Newer mood';
console.log(person.mood.preCoffee, structClone.mood.preCoffee);

// Object.assign -> shollw clone works with functions
// structuredClone -> deep clone, doesn't work with functions