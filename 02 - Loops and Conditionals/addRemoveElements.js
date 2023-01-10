const p = document.createElement('p');

document.body.prepend(p);
p.innerText = 'Nu bör jag synas!';

const list = document.createElement('ol');
document.body.append(list);
const item1 = document.createElement('li');
item1.innerText = 'item1';
list.append(item1);

// Tar bort li-elementet från ol och lägger till det till bodyn istället
// document.body.append(item1);

// const - hela innehållet i variabeln går ej att byta ut. Men om variabeln innehåller ett objekt kan man ändra på egenskaper i objektet
// p.innerText = 'ändra text';
// p = list;

const item2 = document.createElement('li');
item2.innerText = 'item2';
list.append(item2);

item1.remove();

const div = document.createElement('div');
// const div = '<div></div>';
document.body.append(div);
// document.body.innerHTML = div;

// const divDOM = document.querySelector('div');
// divDOM.innerText = 'NU SÅ!';

const ul = '<ul> <li>hej</li> <li>Lenny</li> </ul>';
div.innerHTML = ul;

