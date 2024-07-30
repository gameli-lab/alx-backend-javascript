const getStudentsByLocation = (students, location) => students.filter((student) => student.location === location);

export default getStudentsByLocation;
