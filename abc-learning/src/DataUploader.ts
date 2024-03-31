import { classroom } from './groupFormer';
import { getCollection, addToCollection, removeCollection } from './firebase';
import { addDoc, getFirestore } from 'firebase/firestore/lite';

// TODO 2 upload the data to the server. use the functions from firebase.js and check the firestore console to see if the data is uploaded


const classroomData: classroom = {
    students: [
        {
            firstname: "John",
            Lastname: "Doe",
            id: 1,
            age: 20
            // Add other properties as needed
        },
        {
            firstname: "Alice",
            Lastname: "Smith",
            id: 2,
            age: 22
            // Add other properties as needed
        }
        // Add more students as needed
    ],
    mentors: [
      {
          firstname: "Michael",
          Lastname: "Scott",
          id: 101,
          age: 35
          // Add other properties as needed
      },
      {
          firstname: "Pam",
          Lastname: "Beesly",
          id: 102,
          age: 32
          // Add other properties as needed
      }
      // Add more mentors as needed
    ]
  };

let myClassroom : classroom 

export function uploadClassroomData(data: classroom ): boolean {
    // return true if the data is uploaded successfully idealy each classroom would be its own collection or something like that. Experminet around and try to think of an optimum solution.

    const classroomCollection = getCollection("classroom");
    
    data.students.forEach(async (student) => {
        await addToCollection(classroomCollection, student);
    });
    data.students.forEach(async (mentor) => {
        await addToCollection(classroomCollection, mentor);
    });

    console.log("Data upload successful")
    return true;
}