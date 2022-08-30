// Ders 4 :Tür Dönüsümü
let num1='5';
let num2='10';

console.log(num1+num2)

// bu iki string sayiyi birlestirir 510 degeri olusur.

//EGER asagidaki gibi yazarsak

let num11= Number('5');
let num22= Number('10');
console.log(num11+num22);
console.log(typeof num1);

let total= num11+num22;
console.log(typeof total)

// sonuc ise 15 tipi de number 

// stringe cevirme 

let val;

val= String(true);
console.log(val);
console.log(typeof val);
console.log(val.length)

// new Date() object türü degisken;
// date to string 
val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);
// object türünü stringe cevirdik
//array to string 

val = String([1,3,4,5 ]);

console.log(val);
console.log(typeof val);
console.log(val.length);

//toString()

val = (10).toString;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (false).toString;
console.log(val);
console.log(typeof val);
console.log(val.length);

// String to Number
val = Number('10');
console.log(val);
console.log(typeof val);
console.log(val.length);

// .length string degerlerin uzunlugu bulur

// boolen to number
val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.length);
// console degeri 1

val = Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
// console degeri 0

val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.length);
// console degeri 0

//parseInt
//parseFloat

val = parseInt('10')
console.log(val);
console.log(typeof val);

val = parseFloat('10.3')
console.log(val);
console.log(typeof val);


