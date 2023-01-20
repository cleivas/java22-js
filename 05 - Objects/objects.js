const person = {
    name: 'Clara',
    occupation: 'Educator',
    mood: {
        preCoffee: 'bad',
        postCoffee: 'great',
        sayMoodPreCoffee(){
            console.log(this.name);
        }
    },
    say(word){
        console.log(word, this.name);
    }
}

console.log(person);
person.say('hello');
console.log(person.mood.postCoffee);
person.say(person.mood.postCoffee);

person.mood.sayMoodPreCoffee();

const h1 = document.querySelector('h1');
console.log(h1);

const elementInfo = {
    text: 'Jag är ledsen',
    bgColor: 'rebeccapurple',
    type: 'h1',
    addElement(){
        const el = document.createElement(this.type);
        el.innerText = this.text;
        el.style.background = this.bgColor;
        document.body.append(el); 
    }
}

addElement(elementInfo);
//Skriv om objektet så att detta skapar och lägger till ett nytt element i domen.
// Ska alltså ha exakt samma resultat som rad 33
elementInfo.addElement();

const secondElementInfo = {
    text: 'Jag är glad',
    bgColor: 'hotpink',
    type: 'p'
}

addElement(secondElementInfo);



function  addElement(obj){
    const el = document.createElement(obj.type);
    el.innerText = obj.text;
    el.style.background = obj.bgColor;
    document.body.append(el);
}