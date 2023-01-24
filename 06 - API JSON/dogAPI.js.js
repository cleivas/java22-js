const jsonResponse = `{"status":"success","message":["https://images.dog.ceo/breeds/maltese/n02085936_7142.jpg","https://images.dog.ceo/breeds/whippet/n02091134_9806.jpg","https://images.dog.ceo/breeds/kuvasz/n02104029_4450.jpg","https://images.dog.ceo/breeds/clumber/n02101556_5940.jpg","https://images.dog.ceo/breeds/coonhound/n02089078_4544.jpg"]}`;


const dogApiObj = JSON.parse(jsonResponse);

console.log(dogApiObj.message);



dogApiObj.message.forEach(dogImgUrl => {
    console.log(dogImgUrl);
    const imgEl = document.createElement('img');
    document.body.append(imgEl);
    imgEl.src = dogImgUrl;
});

// for(dogImgUrl of dogApiObj.message){
//     console.log(dogImgUrl);
//     const imgEl = document.createElement('img');
//     document.body.append(imgEl);
//     imgEl.src = dogImgUrl;
// }

//Hämta 5 random bilder och visa i browsern