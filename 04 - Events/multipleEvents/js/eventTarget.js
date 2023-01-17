document.querySelector('div').addEventListener('click', event=>{
    console.log(event.target);
    alert(event.target.id);

    if(event.target.id === 'div1'){
        alert('YAAAAY!')
    }
})