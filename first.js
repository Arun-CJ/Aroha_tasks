

//-------------------------------- // .filter function example
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

//-------------------------------- // .reduce function example
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countedNames);

//---------------------------------- //Array concatination using spread operator
// let numbers = [1, 2];
// let moreNumbers = [3, 4];
// let allNumbers = [...numbers, ...moreNumbers];
// console.log(allNumbers);


// //--------------------------------------//Object Literals
// let name = 'machine name';
// let machine = {
//     [name]: 'server',
//     'machine hours': 10000
// };
 
// console.log(machine[name]);
// console.log(machine['machine hours']);

// var prefix = 'machine';
// var machine = {
//     [prefix + ' name']: 'server',
//     [prefix + ' hours']: 10000
// };
 
// console.log(machine['machine name']);
// console.log(machine['machine hours']);
//let name = 'machine';
// var server = {
//     name: 'server',
//     restart() {
//         console.log(`The ${this.name} is restarting...`);
//     }
// };
// server.restart();
//------------------------------------------//for of example
// let scores = [80, 90, 70];
// for (let score of scores) {
//     score = score + 5;
//     console.log(score);
// }
// let numbers = [6, 7, 8];
// numbers.foo = "foo";
 
// for (let i in numbers) {
//     console.log(i);
// }

// for (let i of numbers) {
//     console.log(i);
// }
// function requiredArg() {
//    throw new Error('The argument is required');
// }
// function add(x = requiredArg(), y = requiredArg()){
//    return x + y;
// }
 
// add(10);
// add(10,20); 
//---------------------------------------------Array Destructing//
// var numero = ['one', 'two', 'three'];

// var [a, b, c] = numero;
// console.log(a);
// console.log(b); 
// console.log(c);
//-----------------------Object destructuring-----------------------//
// var employees = {name: 'Arun', id: 101};
// var {name, id} = employees;

// console.log(name);
// console.log(id);
// var employees = {name: 'Arun', id: 101};
// var {name:a, id:b} = employees;

// console.log(a);
// console.log(b);
//-----------------------------Template Literals-------------------//
// var post = {
//     title: 'JavaScript Template Literals',
//     excerpt: 'Introduction to JavaScript template literals in ES6',
//     body: 'Content of the post will be here...',
//     tags: ['es6', 'template literals', 'javascript']
// };
// var {title, exceprt, body, tags} = post;

// console.log(title);
// console.log(exceprt);
// console.log(body);

//---------------------------------//

// let firstName = 'John',
//     lastName = 'Cena';
 
// let ucantseeme = `Hi ${firstName}, ${lastName}`;
// console.log(ucantseeme);

// function format(literals, ...substitutions) {
//     let result = '';
 
//     for (let i = 0; i < substitutions.length; i++) {
//         result += literals[i];
//         result += substitutions[i];
//     }
//     result += literals[literals.length - 1];
//     return result;
// }
 
// let quantity = 9,
//     priceEach = 8.99,
//     result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;
 
// console.log(result);
//-------------------------Set keyword------------------------------//
// let js = new Set(['angular', 'vu', 'node', 'react']);
// console.log(js);
// js.add('express');
// console.log(js.has('vu'));
// console.log(js.size);
// js.delete('angular');
// console.log(js);
//--------------------Template Strings-----------------//
// var person = 'Kohli';
// var age = 28;

// function myTag(strings, personExp, ageExp) {
//   var str0 = strings[0]; 
//   var str1 = strings[1];


//   var ageStr;
//   if (ageExp > 99){
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   return `${str0}${personExp}${str1}${ageStr}`;
// }

// var output = myTag`That ${ person } is a ${ age }`;

// console.log(output);
// var a = 5, b=10;
// console.log(`Addition of a and b is ${a+b} \n Multiplication of a and b is ${a*b}`);
//---------------------------Map functions---------------------//
// function test(num){
//     return num * 2;
// }
// const num1 = [2,3,4,5,6];
// const numero = num1.map(test);
// console.log(numero);
const num1 = [2,3,4,5,6];
const ner = num1.map(x=>x*2);
console.log(ner);
