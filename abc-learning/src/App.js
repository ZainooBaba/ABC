import './App.css';
import {useState} from "react";
import {uploadData,removeStudentData,removeMentorData} from "./csvReader.ts"

function App() {
  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  const uploadFile = () => {
      uploadData(file)
  }

    const removeData = () => {
        removeStudentData()
        removeMentorData()
    }

    return (
    <div className="App">
        <header className="App-header">
            <h1>ABC Learning</h1>
            <br/>
            <input type={"file"} onChange={handleChange}/>
            <button onClick={uploadFile}>Upload</button>
            <button onClick={removeData}>Remove Data</button>
    </header>


    </div>
  );
}

export default App;
