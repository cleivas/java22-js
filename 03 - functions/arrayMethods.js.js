const arr = [1, 2, 3];
console.log(arr);

arr.push(4, 5, 6);
console.log(arr);

arr.pop();
console.log(arr);

arr.splice(2, 1);
console.log(arr);


arr.forEach(function(el){
    console.log(el);
});

arr.forEach( el=>console.log(el) );

arr.forEach( el => el = el*2 );
console.log(arr);

arr.forEach( (el, index, orginalarray)=>{
    console.log(el, index, orginalarray);
    orginalarray[index] = el*2;
})
console.log(arr);