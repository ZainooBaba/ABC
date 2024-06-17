import { addToCollection, removeCollection } from './firebase.js';

enum AgeGroup {
    kid = "8 - 12",
    teen = "13 - 17",
    adult = "18 and above"
}

enum NativeLang {
    marathi = "Marathi",
    hindi = "Hindi",
    tamil = "Tamil",
    telugu = "Telugu",
    odia = "Odia"
}

enum ParentHelp {
    yes = "Yes",
    no = "No",
    maybe = "Maybe",
}

export type student = {
    firstName: string;
    lastName: string;
    phoneNum: string;
    nativeLang: NativeLang;
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
    ageGroup: AgeGroup;
    phoneNum: string;
    nativeLang: NativeLang;
    country: string;
    cityAndState: string;
    parentHelp: ParentHelp;
};

function isStudentData(csvFile: File): boolean {
    return csvFile.name.includes("Student");
}

function readCSV(file: File | null): Promise<string[][]> {
    return new Promise((resolve, reject) => {
        if (file === null) {
            reject("No file provided");
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            const csvData = event.target.result as string;
            const rows = csvData.split('\n');
            const data = rows.map(row => row.split(','));
            resolve(data);
        };
        reader.onerror = (error) => {
            reject("Error reading the file: " + error);
        };
        reader.readAsText(file);
    });
}

function parseAgeGroup(ageGroupStr: string): AgeGroup {
    switch (ageGroupStr) {
        case "8 - 12":
            return AgeGroup.kid;
        case "13 - 17":
            return AgeGroup.teen;
        case "18 and above":
            return AgeGroup.adult;
        default:
            throw new Error(`Unknown age group: ${ageGroupStr}`);
    }
}

function parseNativeLang(lang: string): NativeLang {
    switch (lang) {
        case "Marathi":
            return NativeLang.marathi;
        case "Hindi":
            return NativeLang.hindi;
        case "Tamil":
            return NativeLang.tamil;
        case "Telugu":
            return NativeLang.telugu;
        case "Odia":
            return NativeLang.odia;
        default:
            throw new Error(`Unknown language: ${lang}`);
    }
}

function parseParentHelp(parentHelp: string): ParentHelp {
    switch (parentHelp) {
        case "Yes":
            return ParentHelp.yes;
        case "No":
            return ParentHelp.no;
        case "Maybe":
            return ParentHelp.maybe;
        default:
            throw new Error(`Unknown parent-help status: ${parentHelp}`);
    }
}

async function getStudentData(csvFile): Promise<[student[], any[]]> {
    let data = await readCSV(csvFile);
    let students: student[] = [];
    let incorrect: any[] = [];
    for (let i = 1; i < data.length; i++) {
        
        console.log(data[i])
        let flag = false;
        for(let j = 1; j < data[i].length; j++){
            if(data[i][j] == ""){
                incorrect.push(data[i])
                flag = true
                break
            }
        }
        if (flag){
            continue
        }
    
        let student: student = {
            firstName: data[i][1].valueOf(),
            lastName: data[i][2].valueOf(),
            phoneNum: data[i][3].valueOf(),
            nativeLang: parseNativeLang(data[i][4].valueOf()),
            grade: parseInt(data[i][5].valueOf().charAt(0)),
            schoolName: data[i][6].valueOf(),
            schoolCity: data[i][7].valueOf(),
            inSEP: (data[i][9].valueOf() == "Yes"),
            schoolState: data[i][10].valueOf()
        };
        students.push(student);
    }
    return [students, incorrect];
}

async function getMentorData(csvFile): Promise<[mentor[], any[]]>  {
    let data = await readCSV(csvFile);
    let mentors: mentor[] = [];
    let incorrect: any[] = [];
    for (let i = 1; i < data.length; i++) {
        
        console.log(data[i])
        let flag = false;
        for(let j = 1; j < data[i].length; j++){
            if(data[i][j] == ""){
                incorrect.push(data[i])
                flag = true
                break
            }
        }
        if (flag){
            continue
        }
        let mentor: mentor = {
            emailAddress: data[i][1].valueOf(),
            firstName: data[i][3].valueOf(),
            lastName: data[i][4].valueOf(),
            ageGroup: parseAgeGroup(data[i][5].valueOf()), 
            phoneNum: data[i][6].valueOf(),
            nativeLang: parseNativeLang(data[i][7].valueOf()),
            country: data[i][8].valueOf(),
            //cityAndState: data[i][9].valueOf(),
            //parentHelp: parseParentHelp(data[i][10].valueOf())
            cityAndState: "New York",
            parentHelp: parseParentHelp("Yes")
        };
        mentors.push(mentor);
    
    }
    return [mentors, incorrect];
}

export async function uploadData(data: File) {
    if (data == null){
        return false;
    }
    if (isStudentData(data)) {
        let studentsData = await getStudentData(data)[0];
        let students = studentsData[0]
        students.forEach(async (student) => {
            await addToCollection("Students", student);
        });
    } else {
        let mentorsData = await getMentorData(data);
        let mentors = mentorsData[0]
    
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


