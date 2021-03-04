const os = require("os");
const greeting = require("./greeting");
 global.name = "Cem";
 
 console.log(date);
 console.log(greeting.getMessage());

let userName = os.userInfo().username;


console.log(`Request Date; ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require("./user.js");
let student = new User("Cem","KPI");
student.sayHi();