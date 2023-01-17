const formBtn = document.querySelector('button');
formBtn.addEventListener('click', event=>{
    event.preventDefault();
    console.log(event);

    const input = document.querySelector('input');
    const textFromInput = input.value;
    input.value = '';
    input.focus();

    const h1 = document.createElement('h1');
    h1.innerText = textFromInput;
    document.body.append(h1);

    
});