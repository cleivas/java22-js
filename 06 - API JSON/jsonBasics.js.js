let json = `{"name":"Clara", "age": 36, "arr": [1, 2, 3]}`;
console.log(json);

const obj = JSON.parse(json);
console.log(obj);

obj.newProperty = 'newValue';
console.log(obj)

json = JSON.stringify(obj);
console.log(json);