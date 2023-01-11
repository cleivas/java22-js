console.log('hej "citat"');
console.log("'ett till citat'");

const name = 'Bob Ross';
const greeting = `Hello, ${name}`;

console.log(greeting);

const multipleLines = `rad
rad
en ny rad`;
console.log(multipleLines);

const calc = `Two plus two equals to ${2+2}`;
console.log(calc);

// Skriv om så att oavsätt hur många p element som läggs till ska färgen alltid gå från hue=40 på första elementet till hue=80 på sista elementet

const amount = 3;
for(let i=0; i<amount; i++){
    const p = document.createElement('p');
    document.body.append(p);

    const hue = 40+(40*i/(amount-1));
    p.style.background = `hsl(${hue}, 90%, 60%)`;
    console.log(hue);
    p.innerText = i;
}