const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

read.on('line', (name) => {
  console.log(`Your name is: ${name}`);

  read.close();
  console.log('This important software is now closing');
});
