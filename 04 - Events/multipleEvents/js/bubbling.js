const divs = document.querySelectorAll('div');

divs[0].addEventListener('click', event=>{
    alert('div 1');
})

divs[1].addEventListener('click', event=>{
    alert('div 2');
})

divs[2].addEventListener('click', event=>{
    alert('div 3');
})

divs[3].addEventListener('click', event=>{
    alert('div 4');
})

divs[4].addEventListener('click', event=>{
    event.stopPropagation();
    alert('div 5');
})