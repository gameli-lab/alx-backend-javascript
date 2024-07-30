const updateStudentGradeByCity = (students, city, newGrades) => students.map((student) => {
  if (student.location === city) {
    return newGrades;
  }
  return students;
});

export default updateStudentGradeByCity;
