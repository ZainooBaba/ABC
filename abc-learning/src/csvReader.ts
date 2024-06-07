// TODO 1: Read the csv file and return the data in the form of an array of objects
// right now the function is returning a hard coded array of objects we need to read the csv file and return the data
// in the format of a student or mentor array
import { parse } from 'csv-parse';
import * as fs from 'fs';
import * as path from 'path';


export type student = {
    firstName: string;
    lastName: string;
    phoneNum: number;
    nativeLang: string;
    grade: number;
    schoolName: string;
    schoolCity: string;
    inSEP: boolean;
    schoolState: string;
    //TODO: Fill out the rest of properties ASAP
};

export type mentor = {
    emailAddress: string;
    firstName: string;
    lastName: string;
    isAdult: boolean;
    phoneNum: number;
    nativeLang: string;
    country: string;
    volunteerBuddy: string;

    //TODO: Fill out the rest of properties ASAP
};

export function isStudentData(csvFile): boolean{

    return csvFile.name.includes("Student")
    //TODO throw an error if the file is not a csv file
    //TODO return true if thee csv file is for student data false if its mentor data.
    //Use somethnig related to the file data not the file name
}

export async function getStudentData(csvFile): Promise <student []> {
    //TODO throw an error if the file is not a csv file
    //TODO return the student data in the form of an array of objects
    let data = await readCSV(csvFile) 
    let students: student[] = []; 
    for (let i = 1; i < data.length; i++) { 
        let student: student = {firstName: data[i][0],lastName: data[i][1], phoneNum: parseInt(data[i][2]), nativeLang: (data[i][3]), grade: parseInt(data[i][4]), schoolName: data[i][5], schoolCity: data[i][6], inSEP: data[i][7], schoolState: data[i][8]} 
        students.push(student)
        
    } 
    
    return students; 

}

function readCSV(file: File | null): Promise<String[][]> { 
    return new Promise((resolve, reject) => { 
        if (file === null) { reject("No file provided"); return; } 
        const reader = new FileReader(); 
        reader.onload = (event) => { const csvData = event.target.result as string; 
        const rows = csvData.split('\n'); 
        const data = rows.map(row => row.split(',')); resolve(data);
     }; 
        reader.onerror = (error) => { 
            reject("Error reading the file: " + error); }; reader.readAsText(file); }); }



export async function getMentorData(csvFile): Promise <student []> {
    //TODO throw an error if the file is not a csv file
    //TODO return the student data in the form of an array of objects
    let data = await readCSV(csvFile) 
    let mentors: mentors[] = []; 
    for (let i = 1; i < data.length; i++) { 
        let mentor: mentor = {emailAddress: data[i][0], firstName: data[i][2], lastName: data[i][3], isAdult: (data[i][4]), phoneNum: data[i][5], nativeLang: data[i][5], country: data[i][6], volunteerBuddy: data[i][7]} 
        mentors.push(mentor)
        
    } 
    
    return mentors; 

}

