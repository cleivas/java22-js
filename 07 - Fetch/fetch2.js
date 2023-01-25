const dogUrl = 'https://dog.ceo/api/breeds/image/random';

fetch(dogUrl)
    .then( response => response.json() )
    .then( showDogImage );

function showDogImage(dogInfo){
    console.log(dogInfo.message);
    const img = document.createElement('img');
    document.body.append(img);
    img.src = dogInfo.message;
}


const beerUrl = 'https://api.punkapi.com/v2/beers/random';
fetch(beerUrl)
    .then(response=>response.json())
    .then(showBeer);

function showBeer(beerInfo){
    console.log(beerInfo[0].name);
    console.log(beerInfo[0].image_url);

    const img = document.createElement('img');
    document.body.append(img);
    img.src = beerInfo[0].image_url;

    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = beerInfo[0].name;
}