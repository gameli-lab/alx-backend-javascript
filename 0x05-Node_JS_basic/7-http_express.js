const express = require('express');
const countStudents = require('./3-read_file_async');
const path = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(path)
  .then(({ totalStudents, students }) => {
    res.write(`Number of students: ${totalStudents}\n`);
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
      }
    }
    res.end();
});
});

app.listen(1245);

module.exports = app;
