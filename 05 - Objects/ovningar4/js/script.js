const divContainer = document.querySelector('#itemContainer');

document.querySelector('button').addEventListener('click', event =>{
    event.preventDefault(); //Alltid med form

    const h5 = document.createElement('h5');
    divContainer.append(h5);

    const amount = document.querySelector('#numberInput').value;
    const item = document.querySelector('#textInput').value;
    h5.innerText = `${amount} ${item}`;
    
    // h5.addEventListener('click', event=> event.target.remove());
})

divContainer.addEventListener('click', event=>{
    console.log(event.target);
    if(event.target.id !== 'itemContainer')
        event.target.remove();
})


// Ovning Events random 1 - 2
// const colors = ['hotpink', 'skyblue', 'violet', 'lightgreen', 'orange'];

// let randomNumber = Math.floor(Math.random()* colors.length);
// const h1 = document.querySelector('h1');
// h1.innerText = colors[randomNumber];

// h1.addEventListener('click', ()=>{
//     document.body.style.background = h1.innerText;
// })

// document.querySelector('button').addEventListener('click', ()=>{
//     randomNumber = Math.floor(Math.random()* colors.length);
//     h1.innerText = colors[randomNumber];
// })


// Events och random 3
// document.querySelector('button').addEventListener('click', ()=>{
//     // radnom nummer mellan 130 oxh 250
//     //250 - 130 
//     const hue = 130 + Math.round(Math.random() * 120 );
//     console.log(hue);

//     document.body.style.background = `hsl(${hue}, 80%, 80%)`;
// })