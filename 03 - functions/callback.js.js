const demo = function(){
    return 10;
}

console.log( demo() );
console.log( demo );
console.log(typeof demo);

console.log('-----------')

function firstFunc(){
    console.log('In firstFunc');
}

function secondFunc(callback){
    console.log('in secondFunc');
    callback();
}

function thirdFunc(){
    console.log('in thirdFunc');
}

secondFunc( firstFunc );
secondFunc( thirdFunc );

console.log('---------')

function add(x, y){
    return x+y;
}

function multiply(x, y){
    return x*y;
}

function calculate(x, y, calc){
    return calc(x, y);
}
console.log(add()); //NaN eftersom undefined plus undefined
console.log( calculate(3, 5, add ));
console.log( calculate(3, 5, multiply ));

console.log( calculate(3, 5, function(x, y){
    return x/y;
}))

console.log( calculate(3, 5, (x, y) => x/y ));

const arrowDemo = (x, y)=>{
    const num = 10;
    return 10*x*y;
}
console.log( arrowDemo(1, 3) );

