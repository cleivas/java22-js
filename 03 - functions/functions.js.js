function logHi(fName, lName = 'Name'){
    console.log(`Hi, ${fName} ${lName}!`)
}

logHi('Max');
logHi();
logHi('Kelly', 'Clarkson');


function logArguments(){
    console.log(arguments);
    for(const arg of arguments){
        console.log(arg);
    }
    console.log('First argument:', arguments[0]);
}

logArguments(1, 4, 6, 'string', 5);

//Skriv en funktion utan parametrar
//Som när den anropas med två argument
//Skriver ut Hi arg1, arg2

function noArgHi(){
    console.log(`Hej, ${arguments[0]} ${arguments[1]}!`)
}

noArgHi();

function multiply(x, y){
    return x*y;
}

console.log( multiply(9, 4) );
console.log( multiply('Nine', 'four') ); //NaN = Not a Number

//Definiera en funktion utan parametrar
//Som returnerar summan av alla argument

function sum(){
   let sum = 0;
   for(const arg of arguments){
        sum+=arg;
   } 
   return sum;
}
console.log(sum(2, 4, 6, 7));
 //Returnerar 19

 //Lägg till en parameter för att bestämma textfärgen
 function createElement(type, elColor){
    const el = document.createElement(type);
    el.innerText = 'ELEMENT';
    el.style.color = elColor;
    return el;
 }

 createElement('p', 'limegreen');
 createElement('h1', 'hotpink');

 document.body.append( createElement('h1', 'skyblue') );
