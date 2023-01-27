let rnum = Math.round( Math.random() * 100);
let g = 0;

document.querySelector('button').addEventListener('click', e=>{
    e.preventDefault();
    
    if(document.querySelector('input').value >= 0 && document.querySelector('input').value <= 100 && document.querySelector('input').value != ''){
        g++;
        document.querySelectorAll('p')[2].innerText = 'Guesses: '+g;
        
        if(document.querySelector('input').value == rnum){
            document.querySelectorAll('p')[1].innerText = 'Correct!'
            rnum = Math.round( Math.random() * 100);
            g=0;
        }
        else if(document.querySelector('input').value<rnum) document.querySelectorAll('p')[1].innerText = 'Guess higher!'
        else document.querySelectorAll('p')[1].innerText = 'Guess lower!'
        
    }
});