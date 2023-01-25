const imgContainer = document.querySelector('#imgContainer');

document.querySelector('button').addEventListener('click', getUserInput);

function getUserInput(event){
    event.preventDefault();
    const amount = document.querySelector('input').value;
    console.log(amount);

    imgContainer.innerHTML = '';
    getDogImages(amount);

}

function getDogImages(amount){
    const url = `https://dog.ceo/api/breeds/image/random/${amount}`;

    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then( displayDogImages );
}

function displayDogImages(dogInfo){
    console.log(dogInfo.message);

    dogInfo.message.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        imgContainer.append(img);
    });
}