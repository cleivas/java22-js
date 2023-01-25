const beerUrl = 'https://api.punkapi.com/v2/beers/random';

// fetch(beerUrl).then( response=>{
//     console.log(response);
//     return response.json();
// }).then( data =>{
//     console.log(data);
// });

// console.log('test');

//Fetch returnerar ett promise där result/value kommer innehålla ett Responseobjekt
const beerPromise = fetch(beerUrl); 
console.log(beerPromise);

//response.json() returnerar ett promise där result/value kommer innehålla informationen från API:t omvandlat från json till JS objekt 

const jsonPromise = beerPromise.then( 
    response => response.json() // callbackmetoden anropas när beerPromise är resolved
    );
console.log(jsonPromise);

jsonPromise.then( 
    beerInfo => console.log(beerInfo) //callbackmetoden anropas när jsonPromise är resolved, efter att console.log('test') anropas
    );

console.log('test');