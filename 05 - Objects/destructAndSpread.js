const obj = {
    text: 'lite text',
    bool: true,
    num: 2345,
}
console.log(obj);

//  samma som rad 12
// const text = obj.text;
// const num = obj.num;

const {text, num} = obj;
console.log(text, num);

const arr = [4, 5, 6, 7, 8];
// Samma som rad 20
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const [a, b, c] = arr;
console.log(a, b, c);

// Destructuring som parametrar
function logText({text, num, bool}){
    console.log(text, num, bool);
}
logText(obj);

// Spread
console.log(...arr);
console.log(arr[0], arr[1], arr[2])

const max = Math.max(...arr);
console.log(max);


const arr1 = [1, 2, 3, 7, 8, 9];
const arr2 = [4, 5, 6];

const completeArr = [];
completeArr.push(...arr1);
completeArr.splice(3, 0, ...arr2);

console.log(completeArr); 

// Clone 
const arrCopy = []
arrCopy.push(...completeArr);
arrCopy[0] = 99;
console.log(arrCopy, completeArr);