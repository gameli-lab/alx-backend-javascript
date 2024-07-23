export default function createReportObject(employeesList) {
	allEmployees = {...employeesList};
	return {
		allEmployees,
		getNumberOfDepartments() {
			return Object.keys(employeesList).lenth;
		}
	};
}
