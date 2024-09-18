const express = require('express');
const countStudents = require('./3-read_file_async');
const path = process.argv[2];

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
})

app.get('/students', (req, res) => {
    res.send('This is the list of our students\n');
    countStudents(path)
    .then(() => {
      console.log('Done!');
    })
    .catch((error) => {
      console.log(error);
    });
  })

app.listen(1245)

module.exports = app