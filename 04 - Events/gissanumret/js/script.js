/*
Gissa numret
- spelaren gissar på ett nummer från 0 till 100
- Datorn "tänker" på ett nummer från 0 till 100
- När spelaren gissat ska det visas ett meddelande om det var för högt, för lågt eller rätt
- Gissar spelaren rätt ska spelet starta om
*/

/**
 * Användarens perspektiv
 * - Inputfält för att fylla i ett nummer
 * - Text-element som visar högt/lågt/rätt
 * - Submitknapp för att skicka in numret
 * - Info över hur man spelar
 */

/**
 * Programmerarens perspektiv
 * - I html behövs: 
 *      p med info
 *      form, numberinput, button
 *      p för att presentera resultatet
 * 
 * - I JS
 *      Math random och floor för att slumpa ett nummer
 *      Eventlistenr på knappen
 *      Hämta nummerInputen så att vi kan ta värdet
 *      Kolla så att numret inte är undefined
 *      Jämföra random med inputNummer
 *      Hämta p-taggen och ändra text beroende på jämförelsen
 *      Om spelaren gissar rätt, generera nytt random nummer
 */

let randomNumber = getRandomNumber();
// console.log(randomNumber)

document.querySelector('#formBtn').addEventListener('click', checkGuess)

function checkGuess(event){
    event.preventDefault();
    const resultP = document.querySelector('#resultParagraph');

    const guess = document.querySelector('#numberInput').value;

    if(guess >= 0 && guess <= 100 && guess != ''){
        console.log(guess);

        if(guess == randomNumber){
            resultP.innerText = 'Correct!'
            randomNumber = getRandomNumber();
            console.log(randomNumber);
        }
        else if(guess<randomNumber) resultP.innerText = 'Guess higher!'
        else resultP.innerText = 'Guess lower!'

    }
}

function getRandomNumber(){
    return Math.round( Math.random() * 100);
}