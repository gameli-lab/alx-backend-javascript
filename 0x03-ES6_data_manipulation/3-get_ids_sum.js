const getStudentIDsSum = (students) => students.reduce((sum, students) => sum + students.id, 0);

export default getStudentIDsSum;
