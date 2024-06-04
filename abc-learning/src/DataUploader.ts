import { classroom } from './groupFormer';
import { getCollection, addToCollection, removeCollection } from './firebase';

export function uploadClassroomData(data: classroom ) {
    const classroomCollection = getCollection("classroom");
    data.students.forEach(async (student) => {
        await addToCollection(classroomCollection, student);
    });
    data.students.forEach(async (mentor) => {
        await addToCollection(classroomCollection, mentor);
    });
}
