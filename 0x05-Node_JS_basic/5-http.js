const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students' && req.method === 'GET') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents('database.csv')
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }
});

const port = 1245;
app.listen(port);
module.exports = app;
