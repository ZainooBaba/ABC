import { student, mentor } from './csvReader';

export type classroom = {
    students: student[];
    mentors: mentor[];
};
export function groupStudentsAndMentors(studentData: student[], mentorData: mentor[]) : classroom[] {
    //TODO 3 group the students and mentors in the form of an array of objects
    //Use information based on the student and mentor data such as languages known and stuff. IDK
    let data: classroom[] = [];
    return data;
}
