const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
console.log (x);
}
//join() return array of string returns an array as a string.

//The join() method does not change the original array.

//Any separator can be specified. The default is comma (,).

let text = fruits.join();
console.log("result after join()==>",text);

///toString() method returns a string with all array values separated by commas
let text1 = fruits.toString();
console.log("result after tostring==>",text1);
//reverse() method reverse the array in accesdding or desccending order
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fruit.reverse();
console.log("actual array",fruit);
console.log("result after reverse==>",text2);
//valueOf() method returns the array itself.The valueOf() method does not change the original array.fruits.valueOf() returns the same as fruits.
let text3 = fruits.valueOf();
console.log("valueof  array result",text3);
//pop() last index value removed from array
fruits.pop();
console.log("after pop values ",fruits);
//push() value added at the lastindex of the array .
fruits.push("Kiwi");
console.log("after push values ",fruits);