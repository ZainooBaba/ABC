import './App.css';
import { uploadClasroomData } from './DataUploader';
import {classroom} from './groupFormer';

function App() {

  const test = () => {
    uploadClasroomData(classroomData)
  };

    return (
    <div className="App">
      <button onClick={test}>
      </button>
    </div>
  );
}

export default App;