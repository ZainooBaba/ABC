import logo from './logo.svg';
import './App.css';
import {addToCollection, getCollection, removeCollection} from './firebase.js';
import {getStudentData} from './csvReader.js';
import React, {useState} from "react";
import {StudentTable} from "./GradesTable";

function App() {

    const addStudents = async () => {
        let studentData = getStudentData()
        for (let i = 0; i < studentData.length; i++) {
            await addToCollection('Students', studentData[i])
        }
         await updateTable()
    }

    const updateTable = async () => {
        let studentData = await getCollection('Students')
        setStudentsData(studentData)
    }

    const removeStudents = async () => {
        await removeCollection('Students')
        await updateTable()
    }

    const [studentsData, setStudentsData] = useState([])

    return (
    <div className="App">
        <button onClick={addStudents}>Add Students</button>
        <button onClick={updateTable}>Update</button>
        <button onClick={removeStudents}>Remove</button>
        <StudentTable data={studentsData} />
    </div>
  );
}

export default App;
