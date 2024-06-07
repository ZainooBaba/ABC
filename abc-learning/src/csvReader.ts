import {addToCollection, removeCollection } from './firebase.js';

export type student = {
    firstName: string;
    lastName: string;
    phoneNum: string;
    nativeLang: string;
    grade: number;
    schoolName: string;
    schoolCity: string;
    inSEP: boolean;
    schoolState: string;
};

export type mentor = {
    emailAddress: string;
    firstName: string;
    lastName: string;
    isAdult: boolean;
    phoneNum: string;
    nativeLang: string;
    country: string;
    volunteerBuddy: string;
};


function isStudentData(csvFile): boolean{
    return csvFile.name.includes("Student")
}

function readCSV(file: File | null): Promise<String[][]> {
    return new Promise((resolve, reject) => {
        if (file === null) {
            reject("No file provided");
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            const csvData = event.target.result as string;
            const rows = csvData.split('\n');
            const data = rows.map(row => row.split(',')); resolve(data);
        };
        reader.onerror = (error) => {
            reject("Error reading the file: " + error);
        };
        reader.readAsText(file);
    });
}


//

async function getStudentData(csvFile): Promise <student []> {
    let data = await readCSV(csvFile) 
    let students: student[] = [];
    for (let i = 1; i < data.length; i++) {
        let student: student = {
            firstName: data[i][1].valueOf(),
            lastName: data[i][2].valueOf(),
            phoneNum: data[i][3].valueOf(),
            nativeLang: data[i][4].valueOf(),
            grade: parseInt(data[i][5].valueOf().charAt(0)),
            schoolName: data[i][6].valueOf(),
            schoolCity: data[i][7].valueOf(),
            inSEP: (data[i][9].valueOf() == "Yes"),
            schoolState: data[i][10].valueOf()
        }
        students.push(student)
    }
    return students;
}

async function getMentorData(csvFile): Promise <mentor []> {
    let data = await readCSV(csvFile)
    let mentors: mentor[] = [];
    for (let i = 1; i < data.length; i++) {
        let mentor: mentor = {
            emailAddress: data[i][1].valueOf(),
            firstName: data[i][3].valueOf(),
            lastName: data[i][4].valueOf(),
            isAdult: (data[i][5].valueOf() == "Yes"),
            phoneNum: data[i][6].valueOf(),
            nativeLang: data[i][7].valueOf(),
            country: data[i][8].valueOf(),
            volunteerBuddy: data[i][11].valueOf()
        }
        mentors.push(mentor)
    }
    return mentors;
}

export async function uploadData(data: File) {
    if (isStudentData(data)) {
        let students = await getStudentData(data);
        students.forEach(async (student) => {
            await addToCollection("Students", student);
        });
    }
    else {
        let mentors = await getMentorData(data);
        mentors.forEach(async (mentor) => {
            await addToCollection("Mentors", mentor);
        });
    }
}

export async function removeStudentData() {
    await removeCollection("Students");
}

export async function removeMentorData() {
    await removeCollection("Mentors");
}

