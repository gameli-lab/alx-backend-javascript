const fs = require('fs');
// const path = require('path');

function countStudents (filePath) {
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
        students
      });
    });
  });
}

module.exports = countStudents;
