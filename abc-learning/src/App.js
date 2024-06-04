import './App.css';
import {useState} from "react";

function App() {
  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }


  const uploadFile = () => {
    console.log(file)
    }

    return (
    <div className="App">
        <header className="App-header">
            <h1>ABC Learning</h1>
    </header>
           <input type={"file"} onChange={handleChange}/>
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default App;
