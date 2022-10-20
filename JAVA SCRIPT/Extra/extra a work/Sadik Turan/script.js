let d = new Date();
let birthday = new Date(1990, 11, 25);
console.log(d.getFullYear() - birthday.getFullYear());

// set methods
d.setDate(3);

d.setFullYear(2023);
d.setHours(3);
d.setMonth(3);
d.setMinutes(3);
d.setSeconds(3);

// get methods
console.log(d.getDate());// ayin kaci oldugunu gösterir
console.log(d.getDay());//0-6 kadar günleri gösterir 0. gün pazartesi
console.log(d.getFullYear());// bize yili verir 2022,2023 gibi
console.log(d.getHours());
console.log(d.getMonth());//burda aylar bir eksigini gösterir-0-1-..11
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d);
console.log(typeof d);

// for example

console.log("For example")
var dt = new Date();
// write birthday on console
console.log(dt.getDate()+1);

// write birthday month on console

console.log(dt.getMonth() + 1);
console.log(" ok");