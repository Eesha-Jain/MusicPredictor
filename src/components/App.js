import '../scss/App.scss';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(15);

  const submit = e => {
    e.preventDefault();
    fetch('http://localhost:9000/python?age=' + age);
  }
  
  return (
    <div className="App">
      <div className="formContainer">
        <div className="container">
          <h1>Music Predictor</h1>
          <form id="form" onSubmit={submit}>
            <label>What is your age?</label><br /><br />
            <input id="age" type="number" min="10" max="130" name="age" value={age} onChange={(e) => {setAge(e.target.value)}} required/>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;