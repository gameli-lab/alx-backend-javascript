/*const fs = require('fs').promises;

function countStudents (path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n').filter(line => line !== '');
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      // const header = lines[0].split(',');
      const studentsData = lines.slice(1);

      const studentsByField = {};
      let totalStudents = 0;
      studentsData.forEach(line => {
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents++;
      });
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch((error) => {
      console.error('Cannot load the database');
    });
}

module.exports = countStudents;
*/

const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i++) { // Start from 1 to skip header
        const line = lines[i].trim();
        if (line) {
          const fields = line.split(',');
          const firstName = fields[0];
          const field = fields[3];

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
          totalStudents++;
        }
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const field in students) {
        if (students.hasOwnProperty(field)) {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
      }

      resolve({
        totalStudents,
        students,
      });
    });
  });
}

module.exports = countStudents;
