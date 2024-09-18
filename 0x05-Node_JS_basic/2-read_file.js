const fs = require('fs');

function countStudents (path) {
  try {
    const info = fs.readFileSync(path, 'utf8');
    const lines = info.trim().split('\n').filter(line => line !== '');
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // const header = lines[0].split(',');
    const studentsData = lines.slice(1);

    const studentsByField = {};

    studentsData.forEach(line => {
      const [firstname, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });
    const totalStudents = studentsData.length;

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
