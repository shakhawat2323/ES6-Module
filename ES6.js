// Modules 30_1 ES6 intro difference between var let and const

// var mone = 23;
// mone = 234;
// console.log(mone);

// let count = 0;
// count = 23;
// console.log(count);

// const num = [23, 4, 5, 34, 45, 56, 23];
// console.log(num);
// num[1] = 2323;
// num.push(23, 34, 2323, 3421, 45, 2312);
// console.log(num);

// let student = {
//   name: "shakhawat",
//   class: 12,
//   Roll: 23,
// };
// student = { name: "akhaas" };
// console.log(student.Roll);
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   sum += i;
//   console.log(sum);
// }
// console.log(sum);

// Modules 30_2 ES6 function default parameter for not provided
/*
function add(num, num1) {
  const result = num + num1;
  console.log(num, num1, result);
  return result;
}
const sum = add(23, 3);

*/

// function Butparfriend(num1 = 0, num2, num3) {
//   const news = num1 + num2 + num3;
//   console.log(num1, num2, num3, news);
// }
// const sum = Butparfriend(2, );

// function add(num, num0) {
//   let result = 0;
//   result = num + num0;
//   //   console.log(result);
// }
// add(23, 2);

// function evetnt(num1, num2 = 4) {
//   let result = 0;
//   result = num1 + num2;
//   console.log(result);
// }
// evetnt();

// Modules 30_3 ES6 Template string ,Multiple linestring , dynamic string

// const first = "jane";
// const last = "pakhi";
// const greet = "potas potas";
// const name = first + " " + last + " " + greet;
// console.log(name);

// const a = 12;
// const b = 10;
// const result = "the sum of " + a + " and " + b + " is " + (a + b);
// console.log(result);

// const math = `the sum of ${a} and ${b} is ${a + b} `;
// console.log(math);

// const email = "dos kmon aco \n tomar sathe dekha hoy na\n kno";
// console.log(email);
// const emails = ` dos kmon co tumi
// tomar sathe kotah bola
// bola jabae naki`;
// console.log(emails);

// const number = [20, 4, 12, 34, 54, 67, 78, 5, 3];
// const student = { name: "khsawat ", age: 23 };
// const matHH = ` the sum of ${number[0]} and ${student.age}`;
// console.log(matHH);

// Modules 30_4 ES6 arrow function, multiple parameter , function body

// normarl function
/*
function add(num, num1) {
  const result = num + num1;
  console.log(result);
  //   return result;
}
add(2, 4);
*/
/*
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

*/
// arrow function
/*
const add = (a, b, c, d) => a + b + c + d;
console.log(add(2, 1, 4, 1));
*/

// Modules 30_5 ES6 more arrow function and big arrow funciton
/*
const difference = (a, b) => a * b;
const multipley = (first, second, third) => first * second * third;
const getage = (person) => person.age;
const student = { name: "shakhawat", age: 23 };
const age = getage(student);
console.log(age);
*/
/*
const double = (num) => num * 2;
console.log(double(2));
const getPI = () => Math.PI;
console.log(getPI());
*/

// Modules 30_ 6 ES6 spread operator arry max copy array

// const max = Math.min(23, 34, 34, 42, 13, 25, 75, 15);
// console.log(max);
/*
const mx = [23, 13, 53, 55, 84, 71, 57];
const arry = Math.max(...mx);
// console.log(arry);

const friend = [23, 3, 32, 45, 67];
const bondu = friend;
friend.push(14, 57);
console.log(bondu);
*/

// Modules 30_7  ES6 (advance ) object and  array destructure
// const actor = {
//   name: "anaata",
//   age: 30,
//   phone: 017485956,
//   money: 8557287257,
// };
// const { name, age, phone, money } = actor;
// console.log(name, age, phone, money);

// const number = [34, 45];
// const [first, last] = [2, 4];
// console.log(first, last);

// function dou(perameter) a:any
// retrun

// Modules 30_8  ES6 keys values entries, delete seal freeze

// const glass = {
//   name: "glass",
//   color: "golden",
//   price: 12,
//   iscleaned: true,
// };
// // const keys = Object.keys(glass);
// // console.log(keys);
// const kess = Object.values(glass);
// const kess = Object.entries(glass);
// console.log(kess);

// Modules 30_ 9 ES6 for of , for in , module summary and practice problem

// const number = [23, 34, 12, 42, 61];
// for (const num of number) {
//   // console.log(num);
// }
// const king = "shakhawat is";
// for (num of king) {
//   console.log(num);
// }

// const glass = { hi: "kmon", aco: "dos", im: "king", ow: "kno" };
// for (const hi in glass) {
//   console.log(hi);
//   const value = glass[hi];
//   console.log(value);
// }

// intervie
// const num = (a, b, c) => {
//   return a + b + c;
// };

// // console.log(num(2, 3, 4));
// const hi = "i am a web developer.";
// const heelo = "i love to code .";
// const wow = "dos";

// const hello = `
// i am a web developer.
// i love to code.
// i love to eat birani
// `;
// console.log(hello);

// const sum = (a, b = 8) => {
//   return a + b;
// };
// console.log(sum(2));

// const firend = ['hi','joen','wow'];
// let hii= [0]

// const hi =(firend)=>{
// }

// Modules 31_ 1 ES6  introduction and basic  es6

// Modules 31_ 2 ES6  access value nested objet optional chaining

// const data = [
//   {
//     id: 1,
//     name: "shakhawat",
//     address: "chirirbondor",
//   },
// ];

// console.log(data[0].id);

// const procat = {
//   count: 2332,
//   data: [
//     { id: 2, name: "shakhawat", price: 234444 },
//     { id: 4, name: "king", price: 453212 },
//   ],
// };
// console.log(procat.data[1].price);

// const user = {
//   id: 44543,
//   name: "shakhawat",
//   addries: {
//     street: {
//       firest: "garment bajar",
//       secent: "boideshir hat",
//     },
//     city: "dinajpur",
//   },
// };
// console.log(user.addries.street.secent);

// Modules 31_ 3 ES6  array map to do one line loop  magic

// const num = [34, 5, 43, 6, 7, 8];
// const double = [];
// for (const number of num) {
//   const dobuled = number * 2;
//   double.push(dobuled);
// }
// console.log(double);

// const newnumber = [2, 3, 4, 5, 6, 7, 8];
// const numer = [];
// for (const num of newnumber) {
//   const sum = num * 2;
//   numer.push(sum);
// }
// console.log(numer);

// const number = [2, 3, 4, 5, 6, 7, 8];
// function eventr(num) {
//   console.log(num);
//   return num * 2;
// }
// console.log(number);
// map ar foreach ak doroner but map return kore ar foreach return kore na
// tai  amra map diye kicu program kore dekhci

// const result = number.map(eventr);
// console.log(result);

// const number = [2, 2, 34, 5, 6, 78];
// const doubled = number.map((num) => num * 3);
// console.log(doubled);
// const numbers = number.map((num) => num * 2);
// console.log(numbers);
// const friend = ["mona", "shona", "ummmmmmmma"];
// const lengthe = friend.map((friens) => friens);
// console.log(lengthe);

// Modules 31_ 4 ES6  foreach filter fiend and differencess betwwen

// const number = [3, 4, 5, 6, 78, 8, 9, 87, 65, 43, 78];
// const result = number.forEach((n) => {
//   const hi = n * 3;
//   return hi;
// });
// console.log(result);

//  ai khane filter diye amra shudu 60 ar theke boro man gulo niyer jonno  ai ta program korci
//  ar
// const number = [3, 4, 5, 6, 78, 8, 9, 87, 65, 43, 78];
// const hight = [78, 98, 76, 98, 67, 87, 65, 65, 43];
// const result = hight.filter((p) => p > 60);
// console.log(result);

// abar amra filter diye ki vabe bijor shonkha ace ta chek korar
// akta progar kore felbo

// const number = [3, 4, 5, 6, 78, 8, 9, 87, 65, 43, 78];
// const result = number.filter((p) => p % 2 == 0);

// abar amra bujor chek korete pari

// const oddnumber = number.filter((o) => o % 2 === 1);
// console.log(oddnumber);
// console.log(result);

// amra leter diye chek korte pari judi kno name ar upor filter diye dikhtepari

// const firend = ["akhas", "tasmin", "shikha", "aligabet"];
// const result = firend.filter((name) => name.length > 7);
// console.log(result);

// amra find diye kicu program korete pari

// const players = [54, 67, 87, 87, 65, 67, 89, 56];
// const selected = players.find((player) => player > 50);
// console.log(selected);

// Modules 31_ 5 ES6  map forEach filter find  reduce

// const number = [23, 54, 645, 78, 65, 43, 23, 45, 67, 45, 67];
// const total = number.reduce((previous, current) => previous + current, 0);
// console.log(total);
// const products = [
//   { id: 1, name: "lenovo", price: 2334543 },
//   { id: 2, name: "dell", price: 23342 },
//   { id: 3, name: "hp", price: 23345 },

// const result = products.map((produc) => produc.price);
// console.log(result);

// amra foreach diye krote pari

// const result = products.forEach((p) => console.log(p.id));
// console.log(result);

// amra filter diye korte pari

// const result = products.filter((p) => p.price > 232);
// console.log(result);

// amara  find diye korte pari
// const result = products.find((p) => p.price < 2333);
// console.log(result);

// Modules 31_ 6 ES6  onptional introduction to class and objet

// Modules 31_ 7 ES6  inheritance prototypical in heritance

// Modules 31_ 8 ES6  this keyword dot notation vs bracket notation

// class preson {
//   constructor(name,age){
//     this.
//   }
// }

// Modules 31_ 9 ES6  explore chrome devtool console tap features

// Errors heandelar

// 1error. syntax Errors in javascript

// onk time program korar por amader liner vitor onek error ase ai jonno amra  bujte pari na
// kothay error khaici  (judi lekhar vitor error dey tahole shetake bole syntax error)

//syntax erorr kicu name

// 1. missing quote   2. unmatched parentheses 3.incorrect keyword 4. unexpected token .unexpected end

//2Errors. Type  Error

// amra judi string ba onno kno function ar man chara take ba  string na dei tahole ai doroner arror ase

// 3Errors . reference error

//  reference error hocce  ami jei khane data paite chai oi khane sei data ase na tai take reference error bole

// 4Errors . common causes

//  ai error tar kaj hocce je ami kno variabel likhci but oi variabel ar ma ne dei na it tai take common causes bole

// practice problem

// const num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const results = num.map((n) => );
// console.log(results);

// Modules 33_ 1 ES6  how dose inter net work
// Modules 33_ 2 ES6  intro to json json structure, parse, strigify

// const user = { id: 2, name: "raju", job: "actor" };

// const result = JSON.stringify(user);
// console.log(result);
// const newresult = JSON.parse(result);
// console.log(newresult);

// const shop = {
//   owner: "shakhawat",
//   address: {
//     street: "kochukhet voot goli",
//     city: "dinajpur",
//     country: "BD",
//   },
//   porductes: ["laptop", "mic", "monitor", "leubpard"],
//   revenue: 4500000,
//   isopen: true,
//   isNew: false,
// };
// const newshop = JSON.stringify(shop);
// console.log(newshop);
// const parese = JSON.parse(newshop);
// console.log(parese);

// Modules 33_ 3 ES6  Json placeholder get data  dispaly data on ui
// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
//   console.log(response)
// );

// Modules 33_ 4 ES6  load more data more apis send data to function
// const   = () => {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// Modules 33_ 5 ES6  dynamically display loaded data on your website

// Modules 33_ 6 ES6  load post and display on the website with css
// Modules 33_ 7 ES6  get post patch delete crud get vs post
// Modules 33_ 8 ES6  debug api network tab status code headers
// Modules 33_ 9 ES6  async await and inter vies
// const localdata = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.ypicode.com/comments");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("data lode Errror");
//   }
// };

// Modules 34_ 1 javascript Engine v8  internal mechnism

// Modules 34_ 2 ES6   javascript Execution context and call stack

// Modules 34_ 3 ES6  single threaded asvnchronous vs svnchronouc

// console.log(1);
// console.log(2);
// setTimeout(documting, 65642345);
// console.log(4);
// console.log(5);
// console.log(6);

// function documting() {
//   console.log(3);
// }

// Modules 34_ 4 ES6  promise and async / await

// const myloder = () => {
//   return new Promise((resolv, reject) => {
//     const success = Math.random();
//     if (success < 0.8) {
//       resolv(success);
//     } else {
//       reject(success);
//     }
//   });
// };
// myloder()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async function localdata() {
//   const res = await fetch("");
//   const data = await res.json();
//   console.log(data);
// }

// localdata();

// Modules 34_ 5 ES6  setlnterval and cleariteval

// console.log(1);
// console.log(2);
// console.log(3)
// console.log(4);
// console.log(5);
// console.log(6);

// let num = 0;

// const hello = setInterval(() => {
//   num++;

//   if(num > 10) {
//     clearInterval(hello);
//   }
//   console.log(hello, num);
// }, 2000);

// Modules 34_ 6 ES6  javascript event loop and concurrency

// function localdata() {
//   const getinput = document.getElementById("name");
//   const agetext = getinput.value;
//   const err = document.getElementById("list");

//   try {
//     const age = parseInt(agetext);
//     if (isNaN(age)) {
//       console.error("please enter a number");
//     } else if (age < 23) {
//       throw " bacha kacca not allowed";
//     }
//     err.innerHTML = "";
//   } catch (errr) {
//     console.log("ERROR", errr);
//     err.innerHTML = "ERROR" + errr;
//   } finally {
//     console.log("hi dos kmon aco");
//   }
//   console.log(2323);
// }

// Modules 34_ 7 ES6  Error Handling :try catch throw and finally

// Modules 34_ 8 ES6  explore morea  about async / await and promiseall

// Modules 34_ 9 ES6  module summary and intevie questions
