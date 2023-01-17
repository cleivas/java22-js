document.querySelector('#myButton').addEventListener('click', addTimeStampElement);


function addTimeStampElement(event){
    console.log('Click');
    console.log(event);

    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = event.timeStamp;
}

const changeColorH1 = document.querySelector('#changeColorH1');

changeColorH1.addEventListener('mouseenter', ()=>
    document.body.style.background = 'hotpink'
);

changeColorH1.addEventListener('mouseleave', ()=>
    document.body.style.background = 'transparent'
);

// Mousemove
document.body.addEventListener('mousemove', event =>{
    console.log(event.clientX, event.clientY);

    const cursorEl = document.querySelector('#cursor');
    // console.log(cursorEl);
    cursorEl.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
})


// Lägg till en eventlistener som gör att bakgrundsfärgen ändras när musen lämnar h1-elementet




// För referens, såhär kan man göra
// document.querySelector('#myButton').addEventListener('click', event=>{
//     console.log('Click');
//     console.log(event);

//     const h1 = document.createElement('h1');
//     document.body.append(h1);
//     h1.innerText = event.timeStamp;
// });