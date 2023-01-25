const beerUrl = 'https://api.punkapi.com/v2/beers/radom ';

fetch(beerUrl)
    .then( response => {
        console.log(response);
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }
        else{
            throw 'DET FUNKAR INTE';
            // console.log('DET FUNKAR INTE');
        }
        
    })
    .then( displayBeer )
    .catch(error=>{
        console.log(error);
        //man kan skapa ett element och visa info i browsern
    });

function displayBeer(beerInfo){
    console.log(beerInfo);
}