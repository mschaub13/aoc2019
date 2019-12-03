const readline = require('readline');
//const fs = require('fs');

let lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

lineReader.prompt();  

let i = 0;

lineReader.on('line', line => {
    console.log('output = ', line / 2);
});

var msg = 'Hello World';
console.log(msg);