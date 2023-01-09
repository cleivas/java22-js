const h3 = document.querySelector('h3');
console.log(h3);

const h3All = document.querySelectorAll('h3');
console.log(h3All);

const art3 = document.querySelector('.art-3');
console.log(art3);

const art3All = document.querySelectorAll('.art-3');
console.log(art3All[0]);

h3.innerText = "Total tystnad";

h3All[1].innerText = 'Vad kommer hända?';

art3.innerHTML = '<h1>NY RUBRIK</h1>';
// art3.innerText = '<h1>NY RUBRIK</h1>';
// art3.innerHTML = '';

const h1 = document.querySelector('.art-3 h1');
console.log(h1);

h1.style.color = 'hotpink';
h1.style.fontWeight = '500';

const img = document.querySelector('img');
img.src = 'https://place-puppy.com/300x300';

const pAll = document.querySelectorAll('p');
pAll[1].style.background = 'linen';

const p = document.querySelector('.art-2 p');
p.style.background = 'blue';

const section = document.querySelector('section');
section.classList.add('red');

//HÄmta första article elementet
//Ta bort klassen art-1

document.querySelector('article').classList.remove('art-1');