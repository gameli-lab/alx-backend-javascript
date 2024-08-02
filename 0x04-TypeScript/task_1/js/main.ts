import { Student } from '../../task_0/js/main';

export interface Teacher extends Student {
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

export class TeacherClass implements Teacher {
    public readonly firstName: string;
    public readonly lastName: string;
    public fullTimeEmployee: boolean;
    public age: number;
    public yearsOfExperience?: number;
    public location: string;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number, additionalAttributes?: { [key: string]: any } ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience !== undefined) {
            this.yearsOfExperience = yearsOfExperience;
        }
        if (additionalAttributes) {
            for (const key in additionalAttributes) {
                if (additionalAttributes.hasOwnProperty(key)) {
                    (this as any)[key] = additionalAttributes[key];
                }
            }
        }
    }
}


interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;

}


const printTeacher = (firstName: string, lastName: string) => {
    console.log(`${firstName[0]}. ${lastName}`);
};

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;

}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public workOnHomework(): string {
        return 'Currently working';
    }
    public displayName(): string {
        return this.firstName;
    }
}

export { StudentClass, StudentConstructor, StudentClassInterface };