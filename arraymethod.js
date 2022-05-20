// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1, 2, "Lemon", "Kiwi");
// console.log("splice method",fruits);
//loop for object 
const str={
    name:'vansh',
    email:"vansh@gmail.com",
    phone:74378932423
}
for( var key in str)
{
    console.log( str[key]);
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
fruits.length=2
console.log("array length",fruits);


var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

for(let i = 0; i < myArray.length; i++){
    console.log(" my array",myArray[i].id,myArray[i].name,myArray[i].age);
}
for (let profile of myArray) {
    console.log(profile.name,profile.age);
}
//concat()
const c=['1','2','3'];
const c1=['4','5','6'];
 result =c.concat(c1);
console.log(result);

//enteries return key values of the array
const fr = ["Banana", "Orange", "Apple", "Mango"];
fr.entries();

for (let x of fr) {
  console.log("entries",fr) ;
}
