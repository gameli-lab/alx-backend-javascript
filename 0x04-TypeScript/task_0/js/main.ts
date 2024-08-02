interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Fafa',
    lastName: 'Agbeshie',
    age: 13,
    location: 'Adeiso'
};

const student2: Student = {
    firstName: 'Florence',
    lastName: 'Dukpo',
    age: 13,
    location: 'Adeiso'
};

const studentList: Student[] = [student1, student2];

const renderTable = () => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const headers = ['firstName', 'location'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    studentList.forEach(student => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        table.appendChild(row);
    });
    document.body.appendChild(table);
}
document.addEventListener('DOMContentLoaded', renderTable);