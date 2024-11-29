var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

var fruits = ["apple", "banana", "cherry"];
var removed = fruits.pop();
console.log(fruits, removed);


var numbers = [5, 10, 15];
var removed = numbers.shift();
console.log(numbers, removed);

var animals = ["cat", "dog"];
var length = animals.unshift("lion");
console.log(animals, length);


var data = [100, 200, 300, 400];
data.length = 2;
console.log(data);


var value = [1, 2, 3];
var isArray = Array.isArray(value);
console.log(isArray);

var arr1 = [1, 2];
var arr2 = [3, 4];
var result = arr1.concat(arr2);
console.log(result);

var letters = ["a", "b", "c"];
var count = letters.push("d", "e");
console.log(letters, count);

var nums = [1, 2, 3, 4];
nums.pop();
nums.shift();
console.log(nums);

var arr = [1, 2, 3];
var length = arr.unshift(0);
arr.pop();
console.log(arr, length);

var items = ["pen", "pencil", "eraser"];
var length = items.push("sharpener");
console.log(items, length);

var nums = [10, 20, 30];
nums.length = 5;
console.log(nums);

var fruits = ["mango", "apple"];
fruits.shift();
fruits.push("orange");
console.log(fruits);

var arr = [1, 2, 3];
arr.pop();
arr.unshift(0);
console.log(arr);

var letters = ["x", "y"];
letters.unshift("w");
letters.push("z");
console.log(letters);

var values = [];
values.push(1);
values.pop();
console.log(values);

var nums = [100];
nums.unshift(50);
nums.pop();
console.log(nums);

var arr1 = ["a"];
var arr2 = ["b", "c"];
var combined = arr1.concat(arr2);
console.log(combined);


var nums = [5, 10];
nums.push(15);
nums.shift();
console.log(nums);

var data = ["x", "y"];
data.unshift("z");
data.pop();
console.log(data);



var arr = [];
arr.push(1, 2);
arr.pop();
console.log(arr);


var arr = ["a", "b", "c"];
arr.pop();
arr.push("d");
console.log(arr);


var arr = ["x"];
arr.unshift("y");
arr.push("z");
arr.shift();
console.log(arr);

var arr = ["1"];
arr.unshift("2", "3");
console.log(arr);


var arr = [10];
arr.push(20, 30);
arr.shift();
console.log(arr);


var arr = [];
arr.unshift("a");
arr.push("b");
arr.unshift("c");
console.log(arr);


var arr = ["1"];
arr.pop();
arr.unshift("2");
console.log(arr);


var nums = [5];
nums.push(10, 15);
nums.length = 2;
console.log(nums);


var arr = ["a", "b", "c"];
arr.pop();
arr.length = 5;
console.log(arr);

var arr = ["p"];
arr.push("q");
arr.unshift("r");
arr.shift();
arr.pop();
console.log(arr);
