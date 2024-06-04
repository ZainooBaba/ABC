// TODO 1: Read the csv file and return the data in the form of an array of objects
// right now the function is returning a hard coded array of objects we need to read the csv file and return the data
// in the format of a student or mentor array

export type student = {
    firstname: string;
    Lastname: string;
    id: number;
    age: number;
    grade: number;
    subject: string;
    //TODO: Fill out the rest of properties ASAP
};

export type mentor = {
    firstname: string;
    Lastname: string;
    id: number;
    age: number;
    //TODO: Fill out the rest of properties ASAP
};

export function isStudentData(csvFile) {
    //TODO throw an error if the file is not a csv file
    //TODO return true if thee csv file is for student data false if its mentor data.
    //Use somethnig related to the file data not the file name
}
export function getStudentData(csvFile) {
    //TODO throw an error if the file is not a csv file
    //TODO return the student data in the form of an array of objects
    let data : student[] = [];
    return data;
}

export function getMentorData(csvFile) {
    //TODO throw an error if the file is not a csv file
    //TODO return the mentor data in the form of an array of objects
    let data : mentor[] = [];
    return data;
}

